import express from "express";
import UserController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post('/', UserController.create);
userRouter.get('/',UserController.getAll);
userRouter.get('/:userId',UserController.getOne);
userRouter.put('/',UserController.update);
userRouter.delete('/:userId',UserController.delete);




export default userRouter;