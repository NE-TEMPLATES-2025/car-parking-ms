import { CreateVehicleDto } from "../dtos";
import prisma from "../prisma/prisma-client";


export const createVehicle= async(createVehicleDto:CreateVehicleDto)=>{

    try {
        
        const user= await prisma.user.findUnique({
            where:{
                id:createVehicleDto.userId
            }
        })
        if(!user) throw new Error("User not found, please try using ID of registered user");
        const vehicle= await prisma.vehicles.create({
            data:{
                ...createVehicleDto
            }
        })
        return vehicle
    } catch (error) {
        console.log("error: ",error);
        throw new Error(`Error:  ${error}`)
        
    }
}

export const getVehicles = async ()=>{
    try {
        
        const vehicles= await prisma.vehicles.findMany({
            take: 5,
            orderBy: {
                createdAt: "desc"
            },
            skip:0
        });
        return vehicles
    } catch (error) {
     console.log("error: ",error);
    throw new Error(`Error:  ${error}`)   
    }
}

const vehicleService= {
    createVehicle,
    getVehicles
}
export default vehicleService