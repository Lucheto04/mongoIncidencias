import { SignJWT, jwtVerify } from 'jose';
import { collectionGen } from '../db/atlas.js';
import { ObjectId } from "mongodb";
import dotenv from 'dotenv';
dotenv.config("../");

const connection = await collectionGen('trainer');

export const tokenGeneretor = async (req, res) =>{
    try {
        console.log(Object.keys(req.body));
        if (Object.keys(req.body).length === 0) return res.status(400).send({mesaage: "Datos no enviados"});
        const trainer = await connection.findOne(req.body)
        if (!trainer) return res.status(404).send("usuario no existente");
        const id = trainer._id.toString();
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT({id: id});
        const jwt = await jwtconstructor
        .setProtectedHeader({alg:"HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("30m")
        .sign(encoder.encode(`${process.env.JWT_PRIVATE_KEY}`));
        res.status(201).send({status: 201, message: jwt});
    } catch (error) {
        console.log(error);
        res.status(404).send({status: 404, message: 'Token solicitado no existente'});
    }   
}

export const tokenVerify = async (req, token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(`${process.env.JWT_PRIVATE_KEY}`)
        );
        console.log(req._parsedUrl.pathname);
        const res = await connection.findOne(
            {
                _id:new ObjectId(jwtData.payload.id),
                [`permisos.${req._parsedUrl.pathname}`]: `${req.headers["accept-version"]}`
            }
        );
        console.log(res);
        let {_id, permisos, ...trainer} = res;
        return trainer;
    } catch (error) {
        return false;
    }
}