import { collectionGen } from "../db/atlas.js";
import { ObjectId } from "mongodb";
import { jwtVerify } from 'jose';


export const postTrainerMiddle = async (req, res) => {
    try {
        let {payload} = req.data;
        const {iat, exp, ...newPayload } = payload
        payload = newPayload
        const {id} = payload
        const connection = await collectionGen('trainer');
        const jefe = await connection.find(
            {
                _id: {ObjectId: id}
            }
        ).toArray()
        console.log(ObjectId: id);
        const {_id} = jefe[0]
        next();
    } catch (error) {
        res.status(401).send("Solo el jefe de trainers puede eliminar incidencias y trainers.");
    }
}