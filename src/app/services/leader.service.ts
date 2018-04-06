import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    // return  new  Promise(resolve =>{
    //   //Simulate server latency with 2sec delay
    //   setTimeout(() => resolve(LEADERS), 2000)}
    // );
    return Observable.of(LEADERS).delay(2000);
  }

  getLeader(id: number): Observable<Leader> {
    // return new  Promise(resolve =>{
    //   //Simulate server latency with 2sec delay
    //   setTimeout(() => resolve(LEADERS.filter((lead) => lead.id === id)[0]), 2000)
    // });
    return Observable.of(LEADERS.filter((lead) => lead.id === id)[0]).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader> {
    // return  new  Promise(resolve =>{
    //   //Simulate server latency with 2sec delay
    //   setTimeout(() =>resolve(LEADERS.filter(lead => lead.featured)[0]), 2000)
    // });
    return Observable.of(LEADERS.filter(lead => lead.featured)[0]).delay(2000);
  }

}
