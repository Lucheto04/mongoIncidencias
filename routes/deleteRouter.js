import { Router } from "express";
import * as deleteController from '../controllers/deleteController.js';

const deleteInitRoute = () => {
    const appRouter = Router();
    appRouter.delete('/trainer', deleteController.deleteTrainerController);

    return appRouter
}

export default deleteInitRoute;