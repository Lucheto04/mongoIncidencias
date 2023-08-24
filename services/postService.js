import { Trainer } from "../collections/trainer.js";
import { Incidencia } from "../collections/incidencia.js";

export const postTrainerService = async (data) => {
    const postTrainer = new Trainer;
    return await postTrainer.postTrainer(data)
}

export const postIncidenciaService = async (data, fecha) => {
    const postIncidencia = new Incidencia;
    return await postIncidencia.postIncidencia(data, fecha)
}