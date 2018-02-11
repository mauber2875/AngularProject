import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    // return Promise.resolve(LEADERS);

    // Simulate server latency with 2 seconds delay
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  getPromotion(id: number): Promise<Leader> {
    // return Promise.resolve(LEADERS.filter((lead) => (lead.id === id))[0]);

    // Simulate server latency with 2 seconds delay
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((lead) => (lead.id === id))[0]), 2000);
    });

  }

  getFeaturedLeader(): Promise<Leader> {
    // return Promise.resolve(LEADERS.filter((lead) => (lead.featured))[0]);

    // Simulate server latency with 2 seconds delay
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((lead) => (lead.featured))[0]), 2000);
    });

  }
}
