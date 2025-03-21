import express from "express";
import { checkUser, createUser } from "../controller/Auth.js";

const authRouter=express.Router();

authRouter.post('/signup',createUser)
.post('/signin',checkUser)

export {authRouter};
