import {
    Body,
    Controller,
    Get,
    Post,
    Query,
  } from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';
import { TripService } from './trip.service';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
  
@Controller('trip')
export class TripController {
    constructor(private tripService: TripService) {}

    @Public()
    @Post('createPublicTrip')
    createPublicTrip(@Body() tripInfo: Record<string, any>, @Body() userId: number){
        if (!tripInfo.location || !tripInfo.start_date || !tripInfo.end_date || (tripInfo.start_date > tripInfo.end_date)) {
            throw new Error('Invalid trip info');
        }
        else {
            return this.tripService.createPublicTrip(userId, tripInfo);
        }    
    }

    @Public()
    @Get('getAllTrips')
    getAllTrips(@Query() req){
        return this.tripService.getTrips(req.userId);
    }
}