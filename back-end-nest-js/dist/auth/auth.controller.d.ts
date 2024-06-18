import { AuthService } from './auth.service';
import { SignInDto } from 'src/dtos/authDtos/signin.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): Promise<{
        role: String;
        name: string;
        idUser: string;
        email: string;
    }>;
}
