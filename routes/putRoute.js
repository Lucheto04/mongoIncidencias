import { Router } from "express";
import * as putController from '../controllers/putController.js';

const putInitRouter = () =>{
    const appRouter = Router();
    appRouter.put('/trainer', putController.putTrainerController)
    return appRouter;
}

export default putInitRouter;
