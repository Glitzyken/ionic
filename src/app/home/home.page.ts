import { Component } from '@angular/core';
import { Activity } from '../types';
import { Observable } from 'rxjs';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  activityList: Observable<Activity[]>;
  constructor(activityService: ActivityService) {
    this.activityList = activityService.getAllActivity();
  }
}
