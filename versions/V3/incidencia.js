import { validationResult } from 'express-validator';

const getIncidenciaVersion3 = async(req, res, next) => {
    console.log("Version 3");
    if(!req.rateLimit) return;
    next()
}

const postIncidenciaVersion3 = async(req, res, next) => {
    console.log("Version 3");
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
    getIncidenciaVersion3,
    postIncidenciaVersion3
}