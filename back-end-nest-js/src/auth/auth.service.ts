import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from 'src/dtos/authDtos/signin.dto';
import { UserDocument } from 'src/user/schemas/userSchema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
        private userService: UserService
    ) {}

    async signIn(signIn: SignInDto) {
        try {
            const user: UserDocument | null = await this.userService.findOneUserByEmail(signIn.email);
            if(!user) return
            const {password, ...result} = user

            if(signIn.password != user.password) {
                throw new UnauthorizedException('Invalid password')
            };

            const payload = {idUser: user.idUser, userName: user.name, roles: user.role, email: user.email};
            return {
                access_token: await this.jwtService.signAsync(payload),
            };

        } catch (error) {
            throw new UnauthorizedException('signIn error')
        }
        

    }

    async profile(email: string) {
        try {
            const user =  await this.userService.findOneUserByEmail(email);
            
            const userData = {
                role: user.role, 
                name: user.name, 
                idUser:user.idUser, 
                email: user.email
            };

            return userData
        } catch (error) {
            throw new Notification('error')
        }
    }
}
