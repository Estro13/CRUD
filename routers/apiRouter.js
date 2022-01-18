import express from "express";
import userRouter from "./userRouter.js";

const apiRouter = express.Router();


apiRouter.get('/', (req, res) => {
    try {
        res.status(200).json('Основний роутер зі шляхом /');
    } catch (error) {
        console.log(error);
    }
});

apiRouter.use('/users', userRouter);

export default apiRouter;