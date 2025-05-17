import { BookParkingSessionDto } from "../dtos";
import prisma from "../prisma/prisma-client";


export const bookParkingSession = async(bookParkingSessionDto:BookParkingSessionDto)=>{
    try {

        const slot= await prisma.slots.findUnique({
            where:{
                id:bookParkingSessionDto.slotId
            }
        })

        if(!slot){
            throw new Error("Slot not found")
        }
        if(slot.status === "OCCUPIED") throw new Error("Slot is already booked")

            const startMinutes = parseTimeToMinutes(bookParkingSessionDto.startTime);
            const endMinutes = parseTimeToMinutes(bookParkingSessionDto.endTime);
            const durationMinutes = endMinutes - startMinutes;
            const durationHours = Math.ceil(durationMinutes / 60);
            const totalPrice = slot.unitPrice * durationHours;
        const parkingSession= await prisma.parkingSession.create({
    data:{
        ...bookParkingSessionDto,
        duration:durationHours,
        date: new Date(bookParkingSessionDto.date),
        totalFee:totalPrice,
        status: "PENDING"

    }})
    return parkingSession
        
    } catch (error) {
     console.log(error);
        throw new Error("Failed to book parking session");
        
    }
}

const getAllPendingSessions = async()=>{
    try {
        const sessions= await prisma.parkingSession.findMany({
            where:{
                status: "PENDING"
            }
        })
        return sessions
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch pending sessions");
        
    }
}


const approveParkingSession =async(sessionId: number)=>{
    try {
        const session= await prisma.parkingSession.findUnique({
            where:{
                id:sessionId
            }
        })
        if(!session) throw new Error("Session not found")
        if(session.status === "APPROVED") throw new Error("Session is already approved")

        const slot= await prisma.slots.findUnique({
            where:{
                id:session.slotId
            }
        })

        const updatedParkingRequest=await prisma.parkingSession.update({
            where:{
                id: sessionId
            },
            data:{
                ...session,
                status: "APPROVED"
            }
        })
        await prisma.slots.update({
            where:{
                id: session.slotId
            },
            data:{
                ...slot,
                status: "OCCUPIED"
            }
        })
        return updatedParkingRequest;
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to approve parking session");
        
    }

}


const getAllParkingSessions=  async()=>{
    try {
        const parkingSessions= await prisma.parkingSession.findMany({
            orderBy:{
                createdAt: "desc"
            },
            take:5,
            skip:0
        })
        return parkingSessions;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch all parking sessions");
        
    }
}




function parseTimeToMinutes(timeStr: string): number {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
}


const parkingSessionService = {
    bookParkingSession,
    getAllPendingSessions,
    approveParkingSession,
    getAllParkingSessions
}

export default parkingSessionService;