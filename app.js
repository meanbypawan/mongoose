import express from 'express';
import mongoose from 'mongoose';
const app = express();
import userRouter from './route/user.route.js';
import bodyParser from 'body-parser';
import bookRouter from './route/book.route.js';

mongoose.connect('mongodb+srv://meanstack:mean123@cluster0.dkefj.mongodb.net/productdb?retryWrites=true&w=majority', err => {
    if (!err) {
        let port = process.env.PORT || 3000

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

        app.use("/user",userRouter);
        app.use("/book",bookRouter);
        app.listen(port, () => {
            console.log("Server Running..");
        })
    }
    else
        console.log("Database connection error.."+err);
});