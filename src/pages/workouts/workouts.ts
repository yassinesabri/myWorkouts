/**
 * Created by sabri on 4/8/2017.
 */
import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers : [WorkoutService]
})
export class WorkoutsPage implements OnInit{

  constructor(public navCtrl: NavController,private workoutService:WorkoutService) {

  }
  ngOnInit(){
    this.workoutService.getWorkouts().subscribe(workouts => {
      console.log(workouts);
    });
  }
}
