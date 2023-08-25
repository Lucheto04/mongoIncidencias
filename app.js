import dotenv from 'dotenv';
import express from 'express';
import initApiRoute from './routes/index.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', initApiRoute());


const config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});