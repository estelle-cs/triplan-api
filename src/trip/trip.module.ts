import { Module } from '@nestjs/common';
import { UsersModule } from '../user/user.module';
import { TripService } from './trip.service';
import { TripController } from './trip.controller';

@Module({
  imports: [
    UsersModule,
  ],
  providers: [
    TripService
  ],
  controllers: [TripController],
  exports: [TripService],
})
export class TripModule {}