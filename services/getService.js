import { Trainer } from "../collections/trainer.js";

export const getAllTrainers = async () => {
    const trainers =  new Trainer;
    return await trainers.getAllTrainers();
}
export const getTrainerById = async (id) => {
    const trainer = new Trainer;
    return await trainer.getTrainerById(id);
}
