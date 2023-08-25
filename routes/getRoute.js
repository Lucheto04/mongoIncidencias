import { Router } from "express";
import * as getController from '../controllers/getController.js';
import passportHelper from '../helpers/passportHelper.js'
import routesVersioning  from 'express-routes-versioning';
import {appVersionAll1} from "../versions/V1/gets.js";


const getInitRoute = () => {
    const appRouter = Router();
    const version = routesVersioning();
    appRouter.use(passportHelper.authenticate('bearer', { session: false }))
    appRouter.get('/trainers', version({
        "^1.0.0": appVersionAll1,
    }), getController.getAllTrainersController);
    
    appRouter.get('/trainer', getController.getTrainerByIdController);
    appRouter.get('/incidencias', getController.getAllIncidenciasController);
    appRouter.get('/incidencia', getController.getIncidenciaByidController);
    return appRouter;
}

export default getInitRoute;