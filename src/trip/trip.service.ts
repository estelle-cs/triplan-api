import { Injectable } from '@nestjs/common';
import { Trip } from './trip.model';

@Injectable()
export class TripService {
  private trips: Trip[] = [];
  private idCounter = 1;


  createPublicTrip(userId:number,tripInfo: Record<any, any>): Trip {
   
    const newTrip: Trip = {
      id: this.idCounter++,
      location: tripInfo.location,
      start_date: tripInfo.start_date,
      end_date: tripInfo.end_date,
      owner_id: tripInfo.userId,
      transports: tripInfo.transports,
      hostings: tripInfo.hostings,
      activities: tripInfo.activities
    };
    this.trips.push(newTrip);
    return newTrip;
  }
  

  getTrips(userId:number): Trip[] {
    return this.trips.filter(trip => trip.owner_id == userId);
  }


  getTripById(userId : number, id: number): Trip {
    return this.trips.find(trip => trip.id == id && trip.owner_id == userId);}

  updateTrip(userId: number, id: number, tripInfo: Record<any, any>): Trip {
    const tripIndex = this.trips.findIndex(trip => trip.id == id);
    if (tripIndex !== -1) {

        const newTrip: Trip = {
          id: id,
          location: tripInfo.location,
          start_date: tripInfo.start_date,
          end_date: tripInfo.end_date,
          owner_id: userId,
          transports: '',
          hostings: '',
          activities: ''
        };

        this.trips[tripIndex] = newTrip;
        return this.trips[tripIndex];
    }
    return null;
  }

  deleteTrip(userId:number,id: number): boolean {
    const tripIndex = this.trips.findIndex(trip => trip.id == id);
    if (tripIndex !== -1) {
      this.trips.splice(tripIndex, 1);
      return true;
    }
    return false;
  }
}
