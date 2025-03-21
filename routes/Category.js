import express from "express";
import { fetchCategory } from "../controller/Category.js";

const Categoryrouter=express.Router();

Categoryrouter.get('/',fetchCategory)


export {Categoryrouter};