/**
 * Created by sabri on 4/8/2017.
 */
import { Component , OnInit } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import {WorkoutService } from '../../services/workout.service';
import {WorkoutDetailsPage} from '../workout-details/workout-details';

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers : [WorkoutService]
})
export class WorkoutsPage implements OnInit{
  workouts:any;
  constructor(public navCtrl: NavController, public navParams: NavParams , private workoutService:WorkoutService) {
    this.workoutService.getWorkouts().subscribe(workouts => {
      //console.log(workouts);
      this.workouts = workouts;
    });
  }
  ngOnInit(){
    //console.log('Workouts Initiated');
    this.workoutService.getWorkouts().subscribe(workouts => {
      //console.log(workouts);
      this.workouts = workouts;
    });
  }
  selectedWorkout(event,workout){
    //console.log(workout.title);
    this.navCtrl.push(WorkoutDetailsPage,{
      workout : workout,
    })
  };
}
