import { Router } from "express";
import * as getController from '../controllers/getController.js';

const getInitRoute = () => {
    const appRouter = Router();
    appRouter.get('/trainers', getController.getAllTrainersController);
    appRouter.get('/trainer', getController.getTrainerByIdController);
    appRouter.get('/incidencias', getController.getAllIncidenciasController);
    return appRouter;
}

export default getInitRoute;