import { collectionGen } from "../db/atlas.js";
import siguienteId from '../helpers/siguienteId.js'
export class Trainer {
    _id;
    id_trainer;
    nombre;
    email_personal;
    email_corporativo;
    telefono_movil;
    telefono_residencia;
    telefono_empresa;
    telefono_movil_empresarial;
    constructor () {}
    async connect(){
        try {
            const result = await collectionGen('trainer');
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllTrainers(){
      try {
        const connection = await this.connect();
        const result = await connection.find().toArray();
        return result;
      } catch (error) {
        throw error
      }
    }
    async getTrainerById(id){
        try {
            const connection = await this.connect();
            const result = await connection.find(
                {
                    id_trainer: id
                },
                {
                    _id: 0
                }
            ).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async postTrainer(data){
        try {
            const connection = await this.connect();
            const newId = await siguienteId("trainer");
            const newDocument = {
                id_trainer: newId,
                ...data
            };
            const result = connection.insertOne(newDocument);
            return result
        } catch (error) {
            throw error
        }
    }
    async putTrainer(id, data){
        try {
            const connection = await this.connect();
            const result = await connection.updateOne(
                { id_trainer: parseInt(id) },
                { $set: data }
            );
            return result;
        } catch (error) {
            throw error
        }
    }
    async deleteTrainer(id){
        try {
            const connection = await this.connect();
            const result = await connection.deleteOne(
                { id_trainer: parseInt(id)}
            )
            return result;
        } catch (error) {
            throw error;
        }
    }
}