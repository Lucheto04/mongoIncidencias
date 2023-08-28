import {check} from 'express-validator';
let entidad = {
    entidad1: "nombre",
    entidad2: "email",
    entidad3: "telefono",
    entidad4: "rol"
};

let {entidad1:e1, entidad2: e2, entidad3: e3, entidad4: e4} = entidad;

export const trainersPostDto = [
    check(`${e1}`)
    .notEmpty().withMessage(`El ${e1} es obligatorio.`)
    .isString().withMessage(`El ${e1} debe ser un string.`)
    .matches(/^[a-zA-Z]+$/).withMessage(`El ${e1} solo resive letras.`),

    check(`${e2}`)
    .notEmpty().withMessage(`El ${e2} es obligatiorio`)
    .isString().withMessage(`El ${e2} debe ser un string.`),

    check(`${e3}`)
    .notEmpty().withMessage(`El ${e3} es obligatiorio`)
    .isString().withMessage(`El ${e3} debe ser un string.`),    

    check(`${e4}`)
    .notEmpty().withMessage(`El ${e4} es obligatiorio`)
    .isString().withMessage(`El ${e4} debe ser un string.`)
]