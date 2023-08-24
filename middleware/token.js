import { SignJWT, jwtVerify } from 'jose';
import { collectionGen } from '../db/atlas.js';


export const tokenGeneretor = async (req, res) =>{
    try {
        const {id} = req.params
        const id_numero = parseInt(id)
        const connection = await collectionGen('trainer');
        const trainer = await connection.find(
            {
                id_trainer: id_numero
            }
        ).toArray()
        if (!trainer) res.status(404).send("usuario no existente");
        const {id_trainer} = trainer[0];
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT({id_trainer});
        const jwt = await jwtconstructor
        .setProtectedHeader({alg:"HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("30m")
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        res.status(201).send({status: 201, message: jwt});
    } catch (error) {
        console.log(error);
        res.status(404).send({status: 404, message: 'Token solicitado no existente'})
    }   
}