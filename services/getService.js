import { Trainer } from "../collections/trainer.js";
import { Incidencia } from "../collections/incidencia.js";

export const getAllTrainersService = async () => {
    const getTrainers =  new Trainer;
    return await getTrainers.getAllTrainers();
}
export const getTrainerByIdService = async (id) => {
    const getTrainers = new Trainer;
    return await getTrainers.getTrainerById(id);
}

export const getAllIncidenciaservice = async () => {
    const getIncidencias = new Incidencia;
    return await getIncidencias.getAllIncidencias();
}

export const getIncidenciaByIdervice = async (id) => {
    const getIncidencias = new Incidencia;
    return await getIncidencias.getIncidenciaById(id);
}
