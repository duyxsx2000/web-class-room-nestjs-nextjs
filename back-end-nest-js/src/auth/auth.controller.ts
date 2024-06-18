import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
    ValidationPipe
  } from '@nestjs/common';
  import { AuthGuard } from './auth.guard';
  import { AuthService } from './auth.service';
import { SignInDto } from 'src/dtos/authDtos/signin.dto';
  


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('signIn')
    signIn(@Body(ValidationPipe) signInDto: SignInDto) {
   
      return this.authService.signIn(signInDto)
    };

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) { 
      const email = req.user.email     
      return this.authService.profile(email);
    }
}