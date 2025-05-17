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

 const getAllPendingSessions = async(req:Request,res:Response)=>{
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
        const response= await parkingSessionService.approveParkingSession(sessionId);

        res.status(200).json(ApiResponse.success("Approved parking session",201,response)
    )
    } 
    catch (error) {
        res.status(500).json({
            message: "Failed to approve parking session",
        })
    }
}

const getAllSessions = async(req:Request,res:Response)=>{
    try {
        const response= await parkingSessionService.getAllParkingSessions();

        res.status(200).json(
            ApiResponse.success("Fetched all requested sessions",200,response)
        )
        
    } catch (error:any) {
        console.log(error);
        res.status(500).json({
            message: "Failed to fetch approved sessions",
            error: error.message
        })
    }
}

const parkingSessionController = {
    bookParkingSession,
    getAllPendingSessions,
    approveParkingSession,
    getAllSessions
}
export default parkingSessionController;