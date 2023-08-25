import * as putService from '../services/putService.js';

export const putTrainerController = async (req, res) => {
    try {
        const {id} = req.query;
        const data = req.body
        const result = await putService.putTrainerService(id, data);
        if(result.modifiedCount === 0) return res.status(200).send("Ese trainer no existe en la base de datos");
        if(result.modifiedCount > 0) return res.status(200).send("Actualizado correctamente");
    } catch (error) {
        res.status(500).send(error);
    }
}

export const putIncidenciaController = async (req, res) => {
    try {
        const {id} = req.query;
        const data = req.body;
        const result = await putService.putIncidenciaService(id, data);
        if(result.modifiedCount === 0) return res.status(200).send("Ese trainer no existe en la base de datos");
        if(result.modifiedCount > 0) return res.status(200).send("Actualizado correctamente");
    } catch (error) {
        res.status(500).send(error);
    }
}