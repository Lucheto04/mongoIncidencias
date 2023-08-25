import { Router } from 'express'; 

const appVersionAll1 = Router();

appVersionAll1.use(async(req, res, next) => {
    if(!req.rateLimit) return;
    next()
})


export { 
    appVersionAll1
}