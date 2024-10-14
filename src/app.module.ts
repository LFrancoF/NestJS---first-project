import { Module } from '@nestjs/common';
import {TaskModule} from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [TaskModule, AuthModule, UserModule, ProjectModule],
  controllers: [HelloController],
})
export class AppModule {}
