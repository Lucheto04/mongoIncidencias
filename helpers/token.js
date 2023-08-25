import { SignJWT, jwtVerify } from 'jose';
import { collectionGen } from '../db/atlas.js';

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
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        res.status(201).send({status: 201, message: jwt});
    } catch (error) {
        console.log(error);
        res.status(404).send({status: 404, message: 'Token solicitado no existente'});
    }   
}

export const tokenVerify = async (req, res, next) => {
    const {authorization} = req.headers;
    if (!authorization) return res.status(400).send({status: 400, token: "Token no enviado"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        next();
    } catch (error) {
        res.status(498).send({status: 498, token: "Token caducado"});
    }
}