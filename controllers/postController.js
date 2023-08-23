import * as postService from '../services/postService.js';

export const postTrainerController = async (req, res) => {
    try {
        const data = req.body
        const result = await postService.postTrainerService(data);
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied);
    }
}
