import { Router } from "express";
import * as postController from '../controllers/postController.js';

const postInitRoute = () => {
    const appRouter = Router();
    appRouter.post('/trainer', postController.postTrainerController);
    appRouter.post('/incidencia', postController.postIncidenciaController);
    return appRouter;
}

export default postInitRoute;