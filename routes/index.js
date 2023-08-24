import { Router } from "express";
import getInitRoute from "./getRoute.js";
import postInitRoute from "./postRoute.js";
import putInitRouter from "./putRoute.js";
import deleteInitRoute from "./deleteRouter.js";
import { limitPets, limitSize } from "../helpers/limit.js";
import { tokenGeneretor, tokenVerify } from "../middleware/token.js";
import { deleteIncidenciaMiddleware } from "../middleware/deleteIncidencia.middle.js";
import { postTrainerMiddle } from "../middleware/postTrainer.middle.js";
const initApiRoute = () => {
    const apiRouter = Router();
    apiRouter.use('/token/:id', limitPets, tokenGeneretor)
    apiRouter.use('/get', limitPets, tokenVerify, postTrainerMiddle, getInitRoute());
    apiRouter.use('/post', limitPets, limitSize, tokenVerify, postInitRoute());
    apiRouter.use('/put', limitPets, limitSize, tokenVerify, putInitRouter());
    apiRouter.use('/delete', limitPets, tokenVerify, deleteIncidenciaMiddleware, deleteInitRoute());
    return apiRouter;
}

export default initApiRoute;