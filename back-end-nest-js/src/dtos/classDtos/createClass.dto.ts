import { IsString, IsInt, IsEmail } from 'class-validator';


export class CreateClassDto {

    @IsString()
    name: string

    @IsString()
    title: string

    @IsString()
    password: string

}