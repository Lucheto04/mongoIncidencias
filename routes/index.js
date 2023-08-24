import { Router } from "express";
import getInitRoute from "./getRoute.js";
import postInitRoute from "./postRoute.js";
import putInitRouter from "./putRoute.js";
import deleteInitRoute from "./deleteRouter.js";
import { tokenGeneretor, tokenVerify } from "../middleware/token.js";
import { deleteMiddleware } from "../middleware/delete.middle.js";
const initApiRoute = () => {
    const apiRouter = Router();
    apiRouter.use('/token/:id', tokenGeneretor)
    apiRouter.use('/get', tokenVerify, getInitRoute());
    apiRouter.use('/post', tokenVerify, postInitRoute());
    apiRouter.use('/put', tokenVerify, putInitRouter());
    apiRouter.use('/delete', tokenVerify, deleteMiddleware, deleteInitRoute());
    return apiRouter;
}

export default initApiRoute;