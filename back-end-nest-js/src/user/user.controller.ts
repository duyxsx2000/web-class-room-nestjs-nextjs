import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('/create')
    async createUser() {
        try {
            await this.userService.createUser()
            return 'done'
        } catch (error) {
            return 'error'
        }
    }

    @Post('/find/:id')
    async findUser(
        @Param('id') id: string
    ) {
        console.log(id,'45678910');
        
        try {
            const user = await this.userService.findOneUser(id)
            return user
        } catch (error) {
            return 'error'
        }
    }
}
