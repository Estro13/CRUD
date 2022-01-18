import express from "express";
import mongoose from 'mongoose';
import apiRouter from "./routers/apiRouter.js";


const app = express();
const port = 5000 || process.env.port;
const urlDB = 'mongodb+srv://user:user@cluster0.h8d4f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json());

app.use('/', apiRouter);






async function startApp() {
    try {
        await mongoose.connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true });
        app.listen(port, () => {
            console.log(`Server working on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

startApp();