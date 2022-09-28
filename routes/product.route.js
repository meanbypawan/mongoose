import express from 'express';
const router = express.Router();
//import  * as productController  from '../controller/product.controller.js';
import { save, list, deleteProduct } from '../controller/product.controller.js'

// http://localhost:3000/product/save
router.post("/save",save);
router.get("/list",list);
router.get("/delete/:id",deleteProduct)
export default router;