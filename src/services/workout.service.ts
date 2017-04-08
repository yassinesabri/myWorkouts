/**
 * Created by sabri on 4/8/2017.
 */
import {Injectable,Inject} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Obervable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{
  apiKey:string;
  workoutsUrl:string;
  constructor(private http:Http){
    console.log('service is ready...');
    this.apiKey='HGQkA5dKUfANPDYURA45t6bmjjwwXD13';
    this.workoutsUrl='https://api.mlab.com/api/1/databases/myworkout/collections/workouts';
  }
  getWorkouts(){
    return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey).map(res => res.json());
  }
}
