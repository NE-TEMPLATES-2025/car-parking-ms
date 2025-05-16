import { CreateParkingSlotDto } from "../dtos";
import prisma from "../prisma/prisma-client";

export const createParkingSlot= async(createParkingSlotDto:CreateParkingSlotDto)=>{
    try {
        
        const parkingSlot= await  prisma.slots.create({
            data:{
                ...createParkingSlotDto,
                status: "AVAILABLE",
                type: "CAR"

            }
        })

        return parkingSlot;
    } catch (error) {
        console.log("Error: ",error);
        throw new Error(`Error:  ${error}`)
        
    }
}

export const getParkingSlots= async()=>{
    try {
        const parkingSlots= await prisma.slots.findMany({
            orderBy:{
                createdAt: "desc"
            },
            take:10,
            skip:0
        })
        return parkingSlots
        
    } catch (error) {
        console.log("Error: ",error);
        throw new Error(`Error:  ${error}`)
    }
}

export const deleteParkingSlot= async(id:string)=>{
    try {
        
        const slot= await prisma.slots.findUnique({
            where:{
                id
            }
        })
        if (!slot) throw new Error("You are trying to delete a parking slot which doesn't exist");
        
        await prisma.slots.delete({
            where:{
                id
            }
        })

    } catch (error) {
        console.log("Error: ",error);
        throw new Error(`Error:  ${error}`)
    }
}



const parkingSlotService= {
    createParkingSlot,
    getParkingSlots,
    deleteParkingSlot
}

export default parkingSlotService;