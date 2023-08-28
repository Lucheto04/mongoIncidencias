import { validationResult } from 'express-validator';

const getIncidenciaVersion3 = async(req, res, next) => {
    console.log("Version 3");
    if(!req.rateLimit) return;
    next()
}

export {
    getIncidenciaVersion3
}