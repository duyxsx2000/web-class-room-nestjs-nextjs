import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/userSchema';
import { Model } from 'mongoose';
import { UserModule } from './user.module';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

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

    async findOneUserByEmail(email: string): Promise<UserDocument> {
        try {
            const user = await this.userModel.findOne({email: email})
            return user
        } catch (error) {
            throw new NotFoundException('error')
        }
    }
}
