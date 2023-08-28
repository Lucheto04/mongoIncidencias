import * as postService from '../services/postService.js';

export const postTrainerController = async (req, res) => {
    try {
        const result = await postService.postTrainerService(req.body);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const postIncidenciaController = async (req, res) => {
    try {
        const data = req.body;
        const fecha = new Date()
        const result = await postService.postIncidenciaService(data, fecha);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}
