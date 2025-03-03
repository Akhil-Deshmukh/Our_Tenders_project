import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app = express();

// to link router

import UserRouter from './routes/user_router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';
import  productRouter from './routes/product.router.js';
import BidRouter from './routes/bid.router.js';
 


app.use(cors());

app.use(fileUpload());

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//router level middlware

app.use('/user',UserRouter);
app.use('/category',CategoryRouter);
app.use('/subcategory',SubCategoryRouter);
app.use('/product',productRouter);
app.use("/bid",BidRouter);



app.listen(3001);

console.log("server invoked");
