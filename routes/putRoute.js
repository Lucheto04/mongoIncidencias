import { Router } from "express";
import * as putController from '../controllers/putController.js';

const putInitRouter = () =>{
    const appRouter = Router();
    appRouter.put('/trainers', putController.putTrainerController);
    appRouter.put('/incidencias', putController.putIncidenciaController);
    return appRouter;
}

export default putInitRouter;
