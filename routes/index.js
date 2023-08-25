import { Router } from "express";
import getInitRoute from "./getRoute.js";
import postInitRoute from "./postRoute.js";
import putInitRouter from "./putRoute.js";
import deleteInitRoute from "./deleteRouter.js";
import { limitPets, limitSize } from "../helpers/limit.js";
import { tokenGeneretor,} from "../helpers/token.js";

const initApiRoute = () => {
    const apiRouter = Router();
    apiRouter.use('/token', limitPets, tokenGeneretor);
    apiRouter.use('/', limitPets,  getInitRoute());
    apiRouter.use('/', limitPets, limitSize, postInitRoute());
    apiRouter.use('/', limitPets, limitSize, putInitRouter());
    apiRouter.use('/', limitPets,  deleteInitRoute());
    return apiRouter;
}

export default initApiRoute;