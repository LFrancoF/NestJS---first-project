import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get('/loading')
    authenticating(){
        return 'autenticando usuario'
    }
}
