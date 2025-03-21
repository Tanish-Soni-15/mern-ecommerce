import express from "express";
import { fetchUserById, updateUserById } from "../controller/Users.js";

const userRouter=express.Router();

userRouter.get('/:id',fetchUserById)
.patch('/:id',updateUserById)

export {userRouter}