import { Trainer } from "../collections/trainer.js";

export const deleteTrainerService = async (id) => {
    const deleteTrainer = new Trainer;
    return await deleteTrainer.deleteTrainer(id);
}