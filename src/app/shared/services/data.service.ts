import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DataService {
  private dashboardSourceData = new BehaviorSubject([]);
  dashboardData = this.dashboardSourceData.asObservable();

  constructor() {
  }

  setDashboardData(dashboardData: any) {
    this.dashboardSourceData.next(dashboardData);
  }
}
