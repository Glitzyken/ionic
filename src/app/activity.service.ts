import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './types';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  // tslint:disable-next-line: variable-name
  constructor(private _httpClient: HttpClient) {}

  getActivity(activityID: string): Observable<Activity> {
    // tslint:disable-next-line: no-use-before-declare
    return this._httpClient.get<Activity>(API + '/id/' + activityID);
  }

  getAllActivity(): Observable<Activity[]> {
    // tslint:disable-next-line: no-use-before-declare
    return this._httpClient.get<Activity[]>(API);
  }
}

const API = 'https://orangevalleycaa.org/api/videos';
