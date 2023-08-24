import { collectionGen } from "../db/atlas.js";


export const deleteMiddleware = async (req, res, next) => {
    try {
        let {payload} = req.data;
        const {iat, exp, ...newPayload } = payload
        payload = newPayload
        const connection = await collectionGen('trainer');
            const trainer = await connection.find(
                {
                    id_trainer: 1
                }
            ).toArray()
        const {id_trainer} = trainer[0];
        let verify = id_trainer === JSON.stringify(payload);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send("Solo el trainer Miguel puede eliminar incidencias y trainers.");
    }
}