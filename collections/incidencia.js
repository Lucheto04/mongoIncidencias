import { collectionGen } from "../db/atlas.js";
import siguienteId from '../helpers/siguienteId.js'

export class Incidencia {
    _id;
    id_incidencia;
    trainerId;
    categoria;
    tipo_incidencia;
    fecha_reporte;
    area_incidencia;
    equipo_averiado;
    codigo_equipo;
    descripcion;
    constructor() {}
    async connect() {
        try {
            const result = await collectionGen("incidencia");
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllIncidencias() {
        try {
            const connection = await this.connect();
            const result = await connection.find().toArray();
            return result;
        } catch (error) {
            throw error
        }
    }
}