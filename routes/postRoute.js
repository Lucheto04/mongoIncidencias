import { Router } from "express";
import * as postController from '../controllers/postController.js';
import { trainersPostDto, incidenciasPostDto} from "../versions/V1/dto.js";
import passportHelper from '../helpers/passportHelper.js'
import routesVersioning  from 'express-routes-versioning';
import {postTrainerVersion1} from "../versions/V1/trainer.js";
import { postIncidenciaVersion1 } from "../versions/V1/incidencia.js";

const postInitRoute = () => {
    const appRouter = Router();
    const version = routesVersioning()
    appRouter.post('/trainers', trainersPostDto, version({
        "1.0.0": postTrainerVersion1
    }), postController.postTrainerController);

    appRouter.post('/incidencias', incidenciasPostDto, version({
        "1.0.0": postIncidenciaVersion1
    }), postController.postIncidenciaController);
    return appRouter;
}

export default postInitRoute;