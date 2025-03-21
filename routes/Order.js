import express from "express";
import { createOrder, deleteOrder, fetchAllOrder, updateOrder } from "../controller/Order.js";
const orderRouter=express.Router();

orderRouter.get('/',fetchAllOrder)
.post('/',createOrder)
.delete('/:id',deleteOrder)
.patch("/:id",updateOrder)

export {orderRouter};