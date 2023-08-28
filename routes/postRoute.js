import { Router } from "express";
import * as postController from '../controllers/postController.js';
import { trainersPostDto } from "../versions/V1/dto.js";
import passportHelper from '../helpers/passportHelper.js'
import routesVersioning  from 'express-routes-versioning';
import {appVersionAll1, postTrainerVersion} from "../versions/V1/gets.js";

const postInitRoute = () => {
    const appRouter = Router();
    const version = routesVersioning()
    appRouter.post('/trainers', trainersPostDto, version({
        "1.0.0": postTrainerVersion
    }), postController.postTrainerController);
    appRouter.post('/incidencias', postController.postIncidenciaController);
    return appRouter;
}

export default postInitRoute;