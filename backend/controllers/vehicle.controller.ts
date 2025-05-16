import { Request, Response } from "express";
import { CreateVehicleDto } from "../dtos";
import ApiResponse from "../utils/ApiResponse";
import vehicleService from "../services/vehicle.service";


const createVehicle= async(req:Request,res:Response)=>{

    const body= req.body as CreateVehicleDto;
    try {
        
        const response= await vehicleService.createVehicle(body)
        res.status(200).json(
            ApiResponse.success("Vehicle created successfully",200,response)
        )
    } catch (error) {
        console.log("Error: ",error);
        
    }
}

const getVehicles= async(req:Request,res:Response)=>{

    try {
        const response= await vehicleService.getVehicles()
        res.status(200).json(
            ApiResponse.success("Vehicles retrieved successfully successfully",200,response)
        )
    } catch (error) {
        console.log("Error: ",error);
        
    }
}

const vehicleController= {
    createVehicle,
    getVehicles
}

export default vehicleController;