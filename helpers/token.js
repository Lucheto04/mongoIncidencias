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
        const result = await connection.findOne({_id:new ObjectId(jwtData.payload.id)});
        if(!(req._parsedUrl.pathname in result.permisos)) return;
        let versiones = result.permisos[req._parsedUrl.pathname];
        if(!(versiones.includes(req.headers["accept-version"]))) return;
        const allowedMethods = result.permisos[req._parsedUrl.pathname];
        const currentMethod = req.method;
        console.log(result);
        if (!allowedMethods.includes(currentMethod)) return metodoNoPermitido;
        let {_id, permisos, ...trainer} = result;
        return trainer;
    } catch (error) {
        console.log(error);
        return false;
    }
}