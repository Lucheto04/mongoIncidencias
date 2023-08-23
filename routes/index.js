import { Router } from "express";
import getInitRoute from "./getRoute.js";

const initApiRoute = () => {
    const apiRouter = Router();
    apiRouter.use('/get', getInitRoute());

    return apiRouter;
}

export default initApiRoute;