import * as deleteService  from '../services/deleteService.js';

export const deleteTrainerController = async (req, res) => {
    try {
        const {id} = req.query;
        const result = await deleteService.deleteTrainerService(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}