import express from "express";
import { createProduct, fetchAllProducts, fetchProductById, updateProductById } from "../controller/Product.js";

const router=express.Router();

router.post('/',createProduct)
.get('/',fetchAllProducts)
.get('/:id',fetchProductById)
.patch('/:id',updateProductById)
export {router};