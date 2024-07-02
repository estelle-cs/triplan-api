import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UsersService, UserResolver],
  exports: [UsersService],
})
export class UsersModule {}
