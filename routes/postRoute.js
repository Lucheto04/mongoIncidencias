import { Router } from "express";
import * as postController from '../controllers/postController.js';

const postInitRoute = () => {
    const appRouter = Router();
    appRouter.post('/trainers', postController.postTrainerController);
    appRouter.post('/incidencias', postController.postIncidenciaController);
    return appRouter;
}

export default postInitRoute;