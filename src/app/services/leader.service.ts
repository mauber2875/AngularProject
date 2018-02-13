import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    // return Promise.resolve(LEADERS);

    // Simulate server latency with 2 seconds delay
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS), 2000);
    // });

    return Observable.of(LEADERS).delay(2000);
  }

  getPromotion(id: number): Observable<Leader> {
    // return Promise.resolve(LEADERS.filter((lead) => (lead.id === id))[0]);

    // Simulate server latency with 2 seconds delay
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS.filter((lead) => (lead.id === id))[0]), 2000);
    // });

    return Observable.of(LEADERS.filter((lead) => (lead.id === id))[0]).delay(2000);

  }

  getFeaturedLeader(): Observable<Leader> {
    // return Promise.resolve(LEADERS.filter((lead) => (lead.featured))[0]);

    // Simulate server latency with 2 seconds delay
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS.filter((lead) => (lead.featured))[0]), 2000);
    // });

    return Observable.of(LEADERS.filter((lead) => (lead.featured))[0]).delay(2000);

  }
}
