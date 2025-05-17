import { Request ,Response} from "express";
import { CreateParkingSlotDto } from "../dtos";
import parkingSlotService from "../services/slots.service";
import ApiResponse from "../utils/ApiResponse";


export const createParkingSlot= async(req:Request,res:Response)=>{
    const body=req.body as CreateParkingSlotDto;
    try {
        const response= await parkingSlotService.createParkingSlot(body);
        res.status(201).json(
            ApiResponse.success("Parking slot created successfully",201,response))
        
    } catch (error) {
        console.log(error);
        
    }

}
export const getAllParkingSlots = async (req:Request,res:Response)=>{
    const response= await parkingSlotService.getParkingSlots();

    res.status(200).json(
        ApiResponse.success("Parking slots retrieved successfully",200,response)
        )
}

export const deleteParkingSlot= async (req:Request,res:Response)=>{
    const {id}= req.params;
    try {
        
       await parkingSlotService.deleteParkingSlot(id);
        res.status(204).json(
            ApiResponse.success("Slot deleted successfully",204,{
                message: "Parking slot deleted successfully"
            })
        )
    } catch (error) {
        console.log(error);
        
    }
}

const searchSlots= async(req:Request,res:Response)=>{
    const {q}= req.query;
    try {
        const response= await parkingSlotService.searchSlots(q as string);
        res.status(200).json(
            ApiResponse.success("Search results",200,response)
        )
        
    } catch (error:any) {
        
        console.log(error);
        res.status(500).json({
            message: "Failed to search slots",
            error: error.message
        })
    }
}

const parkingSlotController= {
    createParkingSlot,
    getAllParkingSlots,
    deleteParkingSlot,
    searchSlots
}

export default parkingSlotController;