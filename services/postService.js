import { Trainer } from "../collections/trainer.js";

export const postTrainerService = async (data) => {
    const postTrainer = new Trainer;
    return await postTrainer.postTrainer(data)
}