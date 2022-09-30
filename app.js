import express from 'express';
import mongoose from 'mongoose';
const app = express();
import userRouter from './route/user.route.js';
import bodyParser from 'body-parser';
import bookRouter from './route/book.route.js';
mongoose.connect('mongodb://localhost:27017/productdb', err => {
    if (!err) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

        app.use("/user",userRouter);
        app.use("/book",bookRouter);
        app.listen(3000, () => {
            console.log("Server Running..");
        })
    }
    else
        console.log("Database connection error..");
});