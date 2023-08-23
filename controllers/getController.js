import * as getService from '../services/getService.js';

export const getAllTrainersController = async (req, res) => {
    try {
        const result = await getService.getAllTrainers();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTrainerByIdController = async (req, res) => {
    try {
        const {id} = req.query;
        const result = await getService.getTrainerById(parseInt(id));
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}