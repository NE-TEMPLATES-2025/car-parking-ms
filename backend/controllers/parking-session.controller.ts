import { Request, Response } from "express";
import { BookParkingSessionDto } from "../dtos";
import parkingSessionService from "../services/parking-session.service";
import ApiResponse from "../utils/ApiResponse";


export const bookParkingSession = async(req:Request,res:Response)=>{


    const body= req.body as BookParkingSessionDto;
    try {

      
        const response= await parkingSessionService.bookParkingSession(body);

        res.status(200).json({
            message: "Parking session booked successfully",
            data: response
        })
        
    } catch (error:any) {
        console.log(error);
        res.status(500).json({
            message: "Failed to book parking session",
            error: error.message
        })
    }
    }

 const getAllParkingSessions = async(req:Request,res:Response)=>{
    try {
        const response= await parkingSessionService.getAllPendingSessions();

        res.status(200).json({
            message: "Fetched all pending sessions",
            data: response
        })
        
    } catch (error:any) {
        console.log(error);
        res.status(500).json({
            message: "Failed to fetch pending sessions",
            error: error.message
        })
    }
}

 const approveParkingSession =async(req:Request,res:Response)=>{
    const sessionId = parseInt(req.params.id);

    try {
         await parkingSessionService.approveParkingSession(sessionId);

        res.status(200).json(ApiResponse.success("Approved parking session",201)
    )
    } 
    catch (error) {
        res.status(500).json({
            message: "Failed to approve parking session",
        })
    }
}

const parkingSessionController = {
    bookParkingSession,
    getAllParkingSessions,
    approveParkingSession
}
export default parkingSessionController;