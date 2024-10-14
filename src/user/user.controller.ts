import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
    constructor(private userService:UserService){}

    @Get('/users')
    getUsers(){
        return this.userService.getUsers();
    }

    @Post('/users')
    createUser(@Body() user: createUserDto){
        return this.userService.createUser(user);
    }
}
