import { IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreateParkingSlotDto{

    @IsString()
    @IsNotEmpty()
    slotNumber:string;


    @IsInt()
    @IsNotEmpty()
    floor:number;

    @IsInt()
    @IsNotEmpty()
    unitPrice:number;

}