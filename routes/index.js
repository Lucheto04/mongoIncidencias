import { Router } from "express";
import getInitRoute from "./getRoute.js";
import postInitRoute from "./postRoute.js";
import putInitRouter from "./putRoute.js";
import deleteInitRoute from "./deleteRouter.js";
import { limitPets, limitSize } from "../helpers/limit.js";
import { tokenGeneretor, tokenVerify } from "../middleware/token.js";
import { deleteMiddleware } from "../middleware/delete.middle.js";
const initApiRoute = () => {
    const apiRouter = Router();
    apiRouter.use('/token/:id', limitPets, tokenGeneretor)
    apiRouter.use('/get', limitPets, tokenVerify, getInitRoute());
    apiRouter.use('/post', limitPets, limitSize, tokenVerify, postInitRoute());
    apiRouter.use('/put', limitPets, limitSize, tokenVerify, putInitRouter());
    apiRouter.use('/delete', limitPets, tokenVerify, deleteMiddleware, deleteInitRoute());
    return apiRouter;
}

export default initApiRoute;