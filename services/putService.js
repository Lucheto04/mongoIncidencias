import { Trainer } from "../collections/trainer.js";

export const putTrainerService = async (id, data) => {
    const putTrainer = new Trainer;
    return await putTrainer.putTrainer(id, data);
}