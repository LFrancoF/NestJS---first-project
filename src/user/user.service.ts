import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    private users: any[] = [
        {
            id: 1,
            nombre: 'Gustavo Franco',
            ci: '6452287'
        },
        {
            id: 2,
            nombre: 'Carlos Villegas',
            ci: '9455781'
        },
        {
            id: 3,
            nombre: 'Mariel Claros',
            ci: '3552097'
        }
    ]

    getUsers() {
        return this.users;
    }

    createUser(user: createUserDto){
        
        this.users.push(user)
        
        return {
            ...user,
            id: this.users.length + 1
        }
    }
}
