import express from 'express';
import { save } from '../controller/book.controller.js';
import { body } from 'express-validator';
import multer from 'multer';
const upload = multer({ dest: 'public/images/'});

const router  = express.Router();

router.post("/save",upload.single('image'),
body('name').notEmpty(),
body('publisher').notEmpty(),
body('author').notEmpty(),
body('price').notEmpty(),
body('price').isNumeric(),save);

export default router;