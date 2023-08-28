import { Router } from "express";
import * as getController from '../controllers/getController.js';
import passportHelper from '../helpers/passportHelper.js'
import routesVersioning  from 'express-routes-versioning';
import { getTrainerVersion1 } from "../versions/V1/trainer.js";
import { getIncidenciaVersion1 } from "../versions/V1/incidencia.js";
import { getIncidenciaVersion3 } from "../versions/v3/incidencia.js";

const getInitRoute = () => {
    const appRouter = Router();
    const version = routesVersioning();
    appRouter.use(passportHelper.authenticate('bearer', { session: false }));
    appRouter.get('/trainers', version({
        "^1.0.0": getTrainerVersion1,
    }), getController.getAllTrainersController);
    appRouter.get('/incidencias', version({
        "^1.0.0": getIncidenciaVersion1,
        "3.5.0": getIncidenciaVersion3,
    }), getController.getAllIncidenciasController);
    return appRouter;
}

export default getInitRoute;