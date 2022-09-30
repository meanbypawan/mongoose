import express from 'express';
import { save, signin } from '../controller/user.controller.js';
import { body } from 'express-validator';
const router = express.Router();

router.post("/save",
body('username','username is required').notEmpty(),
body('email','please enter valid email id').isEmail(),
body('password','password is required').notEmpty(),
body('password','password must contain at least 8 letter').isLength({min:8}),save);
router.post("/signin",signin);
export default router;