import { IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateVehicleDto {


    @IsString()
    userId: string;

    @IsString()
    @Matches(/^RA[A-I]{1}[0-9]{3}[A-Z]{1}$/,{message:"Plate number must start with RA ,followed by 3 numbers and ended by a letter"})
    plateNumber: string;

    @IsString()
    @IsNotEmpty()
    brand:string;

    @IsString()
    @IsNotEmpty()
    model:string;

    @IsString()
    @IsNotEmpty()
    color: string;
}
