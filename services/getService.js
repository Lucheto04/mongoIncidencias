import { Trainer } from "../collections/trainer.js";

export const getAllTrainersService = async () => {
    const getTrainers =  new Trainer;
    return await getTrainers.getAllTrainers();
}
export const getTrainerByIdService = async (id) => {
    const getTrainers = new Trainer;
    return await getTrainers.getTrainerById(id);
}
