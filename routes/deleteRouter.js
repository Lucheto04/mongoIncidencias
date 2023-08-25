import { Router } from "express";
import * as deleteController from '../controllers/deleteController.js';

const deleteInitRoute = () => {
    const appRouter = Router();
    appRouter.delete('/trainers', deleteController.deleteTrainerController);
    appRouter.delete('/incidencias', deleteController.deleteIncidenciaController);
    return appRouter;
}

export default deleteInitRoute;