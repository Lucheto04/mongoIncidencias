import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config("../");


let dbConnection = null;

async function conexion(){
    if(dbConnection){
        return dbConnection;
    };
    try {
        const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.nhhfhmc.mongodb.net/${process.env.ATLAS_DB}`
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const client = await MongoClient.connect(uri, options);
        const data = client.db();
        dbConnection = data.collection();
        return dbConnection;
    } catch (error) {
        return {status: 500, message: error};
    }
}

export const collectionGen = async (coleccion) => {
    const db = await conexion();
    const newCollection = db.collection(coleccion);
    return newCollection;
}


