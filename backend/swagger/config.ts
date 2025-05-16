import swaggerAutogen from "swagger-autogen";


// Routes
import authRouter from "../routes/auth.routes"
import adminRouter from "../routes/admin.routes"
import userRouter from "../routes/user.routes"
import slotsRouter from "../routes/slots.routes"
import vehicleRouter from "../routes/vehicle.routes"




const doc = {

    info:{
      title: "Car Parking Management System",
      description:"APIs for application which involves managing car parks including slots,vehicles,users,etc..."
    },
   tags: [
        {
            name: 'Auth',
            description: 'Authentication endpoints'
        },
    ],

    host: "http://localhost:5000",
    basePath: "/api/v1/",
    consumes:["application/json"],
    produces:["application/json"],

    securityDefinitions:{
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
        }
    }
}

const outputFile= "./swagger.json";
const routes= ["../index.ts"];

swaggerAutogen(outputFile,routes,doc);