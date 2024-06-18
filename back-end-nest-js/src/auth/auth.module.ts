import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { forwardRef } from '@nestjs/common/utils';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/userSchema';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }]
      
    ),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '3600s'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService,]
})
export class AuthModule {}