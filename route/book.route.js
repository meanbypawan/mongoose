import express from 'express';
import { save, list, deleteBook, update } from '../controller/book.controller.js';
import { body } from 'express-validator';
import multer from 'multer';
import { verifyToken } from '../middleware/verifyToken.js';
const upload = multer({ dest: 'public/images/'});

const router  = express.Router();

router.post("/save",verifyToken,upload.single('image'),
body('name').notEmpty(),
body('publisher').notEmpty(),
body('author').notEmpty(),
body('price').notEmpty(),
body('price').isNumeric(),save);

router.get("/list",verifyToken,list);

router.get("/delete/:id",verifyToken,deleteBook);

router.post("/update",verifyToken,upload.single('image'),
body('name').notEmpty(),
body('publisher').notEmpty(),
body('author').notEmpty(),
body('price').notEmpty(),
body('price').isNumeric(),update);

export default router;