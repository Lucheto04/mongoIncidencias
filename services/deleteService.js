import { Trainer } from "../collections/trainer.js";
import { Incidencia } from "../collections/incidencia.js";

export const deleteTrainerService = async (id) => {
    const deleteTrainer = new Trainer;
    return await deleteTrainer.deleteTrainer(id);
}

export const deleteIncidenciaService = async (id) => {
    const deleteIncidencia = new Incidencia;
    return await deleteIncidencia.deleteIncidencia(id); 
}