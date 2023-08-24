import { Router } from "express";
import getInitRoute from "./getRoute.js";
import postInitRoute from "./postRoute.js";
import putInitRouter from "./putRoute.js";
import deleteInitRoute from "./deleteRouter.js";
import { tokenGeneretor } from "../middleware/token.js";

const initApiRoute = () => {
    const apiRouter = Router();
    apiRouter.use('/token/:id', tokenGeneretor)
    apiRouter.use('/get', getInitRoute());
    apiRouter.use('/post', postInitRoute());
    apiRouter.use('/put', putInitRouter());
    apiRouter.use('/delete', deleteInitRoute());
    return apiRouter;
}

export default initApiRoute;