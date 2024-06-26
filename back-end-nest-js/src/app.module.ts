import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule, 
    UserModule, 
    ClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
