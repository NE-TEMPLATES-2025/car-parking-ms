import express from'express';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';
import userRouter from "./routes/user.routes"
import adminRouter from "./routes/admin.routes"
import authRouter from "./routes/auth.routes"
import vehicleRouter from "./routes/vehicle.routes"
import parkingSlotRouter from './routes/slots.routes'
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from "./swagger/swagger.json"
import { setupSwagger } from "./swagger/config";




dotenv.config();

const app= express();

app.use(cors({
    origin:"http://localhost:5173",
    methods:["POST","GET","OPTIONS","DELETE","PUT","PATCH"],
}))




// Third-party middlewares

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())



// Route middlewares

app.use("/api/v1/user",userRouter)
app.use("/api/v1/admin",adminRouter)
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/vehicle",vehicleRouter)
app.use("/api/v1/slots",parkingSlotRouter)


// Swagger endpoint

setupSwagger(app);

app.listen(process.env.PORT,()=>{
console.log(`app running on port ${process.env.PORT} `)
})