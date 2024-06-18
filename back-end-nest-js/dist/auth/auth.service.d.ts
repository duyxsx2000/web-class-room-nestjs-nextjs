import { JwtService } from '@nestjs/jwt';
import { SignInDto } from 'src/dtos/authDtos/signin.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UserService);
    signIn(signIn: SignInDto): Promise<{
        access_token: string;
    }>;
    profile(email: string): Promise<{
        role: String;
        name: string;
        idUser: string;
        email: string;
    }>;
}
