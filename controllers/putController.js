import * as putService from '../services/putService.js';

export const putTrainerController = async (req, res) => {
    try {
        const {id} = req.query;
        const data = req.body
        const result = await putService.putTrainerService(id, data);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const putIncidenciaController = async (req, res) => {
    try {
        const {id} = req.query;
        const data = req.body;
        const result = await putService.putIncidenciaService(id, data);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}