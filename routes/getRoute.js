import { Router } from "express";
import * as gets from '../controllers/getController.js';

const getInitRoute = () => {
    const appRouter = Router();
    appRouter.get('/trainers', gets.getAllTrainersController);
    appRouter.get('trainer', gets.getTrainerByIdController);

    return appRouter;
}

export default getInitRoute;