import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/userSchema';
import { Model } from 'mongoose';
import { UserModule } from './user.module';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserModule>) {}

    async createUser() {
        try {
            await this.userModel.create({
                name: "duy123",
                idUser:'123'
            })
            return 'done'
        } catch (error) {
            throw new NotFoundException('error')
        }
    }

    async findOneUser(id: string) {
        try {
            const user = await this.userModel.findOne({idUser:id})
            return user
        } catch (error) {
            throw new NotFoundException('error')
        }
    }
}
