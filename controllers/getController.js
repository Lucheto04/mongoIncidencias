import * as gets from '../services/getService.js';

export const getAllTrainersController = async (req, res) => {
    try {
        const result = await gets.getAllTrainers();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTrainerByIdController = async (req, res) => {
    try {
        const {id} = req.query;
        const result = await gets.getTrainerById(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}