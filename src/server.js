
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

//create application
const app = express();


app.use(express.json());


const  PORT = process.env.PORT || 3000;


export const start =  async() => {
app.listen(PORT, () => {
    console.log(`Server is running on port localhost:${PORT}`);
})
}