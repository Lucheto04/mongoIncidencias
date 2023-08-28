import { Router } from 'express'; 
import { validationResult } from 'express-validator';

const appVersionAll1 = Router();

appVersionAll1.use(async(req, res, next) => {
    if(!req.rateLimit) return;
    next()
})

export const postTrainerVersion = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        if(!req.rateLimit) return;
        next()
    } catch (error) {
        throw error
    }
}

export { 
    appVersionAll1
}