/**
 * Created by sabri on 4/8/2017.
 */
import { Component } from '@angular/core';
import { NavController ,App} from 'ionic-angular';
import {WorkoutService } from '../../services/workout.service';
//import {WorkoutsPage} from '../workouts/workouts';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-add-workout',
  templateUrl: 'addWorkout.html',
  providers : [WorkoutService]
})
export class AddWorkoutPage {
  title:any;
  note:any;
  type:any;
  result:any;
  constructor(public navCtrl: NavController,private workoutService:WorkoutService,public app: App) {

  }
  onSubmit(){
    //console.log('SUBMITTED');
    var workout = {
      title : this.title,
      note : this.note,
      type : this.type
    }
    //console.log(workout);
    //Add Workout
    this.workoutService.addWorkout(workout).subscribe(data => {
      this.result = data;
    },() => console.log('Workout Added'));
    this.app.getRootNav().setRoot(TabsPage);
    //this.navCtrl.setRoot(WorkoutsPage);
  }
}
