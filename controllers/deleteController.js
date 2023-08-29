import * as deleteService  from '../services/deleteService.js';

export const deleteTrainerController = async (req, res) => {
    try {
        const {id} = req.query;
        const result = await deleteService.deleteTrainerService(id);
        if(result.deletedCount === 0) return res.status(404).send("Ese trainer no existe en la base de datos");
        if(result.deletedCount > 0) return res.status(200).send("Eliminado correctamente");
    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteIncidenciaController = async (req, res) => {
    try {
        const {id} = req.query;
        const result = await deleteService.deleteIncidenciaService(id);
        if(result.deletedCount === 0) return res.status(404).send("Esa incidencia no existe en la base de datos");
        if(result.deletedCount > 0) return res.status(200).send("Eliminado correctamente");
    } catch (error) {
        res.status(500).send(error);
    }
}