import { Injectable } from '@nestjs/common';
import { Trip } from './trip.model';

@Injectable()
export class TripService {
  private trips: Trip[] = [];
  private idCounter = 1;


  createPublicTrip(tripInfo: Record<any, any>): Trip {
  
    const newTrip: Trip = {
      id: this.idCounter++,
      location: tripInfo.location,
      start_date: tripInfo.start_date,
      end_date: tripInfo.end_date
    };
  
    this.trips.push(newTrip);
    return newTrip;
  }
  

  getTrips(): Trip[] {
    return this.trips;
  }


  getTripById(id: number): Trip {
    return this.trips.find(trip => trip.id === id);
  }

  updateTrip(id: number, tripInfo: Record<any, any>): Trip {
    const tripIndex = this.trips.findIndex(trip => trip.id === id);
    if (tripIndex !== -1) {

        const newTrip: Trip = {
            id: id,
            location: tripInfo.location,
            start_date: tripInfo.start_date,
            end_date: tripInfo.end_date
        };

        this.trips[tripIndex] = newTrip;
        return this.trips[tripIndex];
    }
    return null;
  }

  deleteTrip(id: number): boolean {
    const tripIndex = this.trips.findIndex(trip => trip.id === id);
    if (tripIndex !== -1) {
      this.trips.splice(tripIndex, 1);
      return true;
    }
    return false;
  }
}
