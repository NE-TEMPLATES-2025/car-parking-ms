import express from'express';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';


const app= express();


// Third-party middlewares

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())



app.listen()