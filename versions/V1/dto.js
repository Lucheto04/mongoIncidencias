import {check} from 'express-validator';
let trainer = {
    entidad1: "nombre",
    entidad2: "email",
    entidad3: "telefono",
    entidad4: "rol"
};
let {entidad1:t1, entidad2: t2, entidad3: t3, entidad4: t4} = trainer;
export const trainersPostDto = [
    check(`${t1}`)
    .notEmpty().withMessage(`El ${t1} es obligatorio.`)
    .isString().withMessage(`El ${t1} debe ser un string.`)
    .matches(/^[a-zA-Z]+$/).withMessage(`El ${t1} solo resive letras.`),

    check(`${t2}`)
    .notEmpty().withMessage(`El ${t2} es obligatiorio`)
    .isString().withMessage(`El ${t2} debe ser un string.`),

    check(`${t3}`)
    .notEmpty().withMessage(`El ${t3} es obligatiorio`)
    .isString().withMessage(`El ${t3} debe ser un string.`),    

    check(`${t4}`)
    .notEmpty().withMessage(`El ${t4} es obligatiorio`)
    .isString().withMessage(`El ${t4} debe ser un string.`)
];

let incidencia = {
    entidad1: "trainer",
    entidad2: "categoria_incidencia",
    entidad3: "tipo",
    entidad4: "area",
    entidad5: "equipo",
    entidad6: "codigo",
    entidad7: "descripcion_incidencia",
};
let {entidad1:i1, entidad2: i2, entidad3: i3, entidad4: i4, entidad5: i5, entidad6: i6, entidad7: i7} = incidencia;
export const incidenciasPostDto = [
    check(`${i1}`)
    .notEmpty().withMessage(`El ${i1} es obligatorio.`)
    .isNumeric().withMessage(`El ${i1} debe ser el numero del id de un trainer.`),

    check(`${i2}`)
    .notEmpty().withMessage(`El ${i2} es obligatiorio`)
    .isString().withMessage(`El ${i2} debe ser un string.`),

    check(`${i3}`)
    .notEmpty().withMessage(`El ${i3} es obligatiorio`)
    .isString().withMessage(`El ${i3} debe ser un string.`),    

    check(`${i4}`)
    .notEmpty().withMessage(`El ${i4} es obligatiorio`)
    .isString().withMessage(`El ${i4} debe ser un string.`),
    
    check(`${i5}`)
    .notEmpty().withMessage(`El ${i5} es obligatiorio`)
    .isString().withMessage(`El ${i5} debe ser un string.`),
    
    check(`${i6}`)
    .notEmpty().withMessage(`El ${i6} es obligatiorio`)
    .isString().withMessage(`El ${i6} debe ser un string.`),
    
    check(`${i7}`)
    .notEmpty().withMessage(`El ${i7} es obligatiorio`)
    .isString().withMessage(`El ${i7} debe ser un string.`),
];

