import { validationResult } from 'express-validator';

const getIncidenciaVersion1 = async(req, res, next) => {
    console.log("Version 1");
    if(!req.rateLimit) return;
    next()
}

const postIncidenciaVersion1 = async(req, res, next) => {
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
    getIncidenciaVersion1,
    postIncidenciaVersion1
}