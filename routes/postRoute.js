import { Router } from "express";
import * as postController from '../controllers/postController.js';
import { trainersPostDtoV1, incidenciasPostDtoV1} from "../versions/V1/dto.js";
import passportHelper from '../helpers/passportHelper.js'
import routesVersioning  from 'express-routes-versioning';
import { postTrainerVersion3 } from "../versions/V3/trainer.js";
import { postTrainerVersion1 } from "../versions/V1/trainer.js";
import { postIncidenciaVersion1 } from "../versions/V1/incidencia.js";
import { postIncidenciaVersion3 } from "../versions/V3/incidencia.js";


const postInitRoute = () => {
    const appRouter = Router();
    const version = routesVersioning()
    appRouter.post('/trainers', trainersPostDtoV1, version({
        "1.0.0": postTrainerVersion1,
        "3.5.0": postTrainerVersion3
    }), postController.postTrainerController);

    appRouter.post('/incidencias', incidenciasPostDtoV1, version({
        "1.0.0": postIncidenciaVersion1,
        "3.5.0": postIncidenciaVersion3
    }), postController.postIncidenciaController);
    return appRouter;
}

export default postInitRoute;