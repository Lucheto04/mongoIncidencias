import { Router } from "express";
import * as deleteController from '../controllers/deleteController.js';

const deleteInitRoute = () => {
    const appRouter = Router();
    appRouter.delete('/trainer', deleteController.deleteTrainerController);
    appRouter.delete('/incidencia', deleteController.deleteIncidenciaController);
    return appRouter
}

export default deleteInitRoute;