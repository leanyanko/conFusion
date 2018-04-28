import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import { RestangularModule, Restangular} from 'ngx-restangular';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular, 
              private processHttpmsgService: ProcessHttpmsgService) { }

  getLeaders(): Observable<Leader[]> {
  //  return Observable.of(LEADERS).delay(2000);
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    //return Observable.of(LEADERS.filter((lead) => lead.id === id)[0]).delay(2000);
    return this.restangular.one('leaders', id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    //return Observable.of(LEADERS.filter(lead => lead.featured)[0]).delay(2000);
    return this.restangular.all('leaders').getList({featured: true})
    .map(leaders => leaders[0]);
  }

  getLeadersIds(): Observable<number[]> {
    return this.getLeaders()
    .map(leaders => {
      return leaders.map(leader => leader.id);
    })
  }

}
