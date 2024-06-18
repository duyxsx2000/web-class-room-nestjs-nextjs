import { IsString, IsInt, IsEmail } from 'class-validator';


export class SignInDto {

    @IsEmail()
    email: string

    @IsString()
    password: string

}