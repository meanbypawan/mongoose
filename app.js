import express from 'express';
import bodyParser from 'body-parser';
import productRouter from './routes/product.route.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/product",productRouter);

app.listen(3000,()=>{
    console.log("server started.");
})