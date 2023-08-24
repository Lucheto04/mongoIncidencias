import { Trainer } from "../collections/trainer.js";
import { Incidencia } from "../collections/incidencia.js";

export const putTrainerService = async (id, data) => {
    const putTrainer = new Trainer;
    return await putTrainer.putTrainer(id, data);
}

export const putIncidenciaService = async (id, data) => {
    const putIncidencia = new Incidencia;
    return await putIncidencia.putIncidencia(id, data);
}