import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

import { WorkoutsPage } from '../workouts/workouts';
import { AddWorkoutPage } from '../addWorkout/addWorkout';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  aboutRoot = AboutPage;
  workoutsRoot = WorkoutsPage;
  addWorkoutRoot = AddWorkoutPage;
  constructor() {

  }
}
