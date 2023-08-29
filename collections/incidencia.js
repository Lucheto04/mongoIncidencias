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
    async getIncidenciaById(id) {
        try {
            const connection = await this.connect();
            const result = connection.find(
                {
                    id_incidencia: id
                },
                {
                    _id: 0
                }
            ).toArray();
            return result
        } catch (error) {
            throw error
        }
    }
    async postIncidencia(data, fecha) {
        try {
            const connection = await this.connect();
            const newIdProducto = await siguienteId("incidencia");
            const {trainer: trainerId, categoria_incidencia: categoria, tipo: tipo_incidencia, area: area_incidencia, equipo: equipo_averiado, codigo: codigo_equipo, descripcion_incidencia: descripcion} = data
            let json = Object.assign({trainerId, categoria, tipo_incidencia, area_incidencia, equipo_averiado, codigo_equipo, descripcion});
            const newDocumentProducto = {
                id_incidencia: newIdProducto,
                fecha_reporte: fecha, 
                ...json
            };
            const result = connection.insertOne(newDocumentProducto);
            return result
        } catch (error) {
            throw error
        }
    }
    async putIncidencia(id, data) {
        try {
            const connection = await this.connect();
            const {trainer: trainerId, categoria_incidencia: categoria, tipo: tipo_incidencia, area: area_incidencia, equipo: equipo_averiado, codigo: codigo_equipo, descripcion_incidencia: descripcion} = data
            let json = Object.assign({trainerId, categoria, tipo_incidencia, area_incidencia, equipo_averiado, codigo_equipo, descripcion});
            const result = await connection.updateOne(
                { id_incidencia: parseInt(id) },
                { $set: json }
            );
            return result;
        } catch (error) {
            throw error
        }
    }
    async deleteIncidencia(id) {
        try {
            const connection = await this.connect();
            const result = await connection.deleteOne(
                { id_incidencia: parseInt(id)}
            )
            return result;
        } catch (error) {
            throw error;            
        }
    }
}