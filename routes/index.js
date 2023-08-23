import { Router } from "express";
import getInitRoute from "./getRoute.js";
import postInitRoute from "./postRoute.js"

const initApiRoute = () => {
    const apiRouter = Router();
    apiRouter.use('/get', getInitRoute());
    apiRouter.use('/post', postInitRoute());
    return apiRouter;
}

export default initApiRoute;