import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
//import { DISHES } from '../shared/dishes';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';

@Injectable()
export class DishService {

  constructor(private http: Http, private processHttpmsgService: ProcessHttpmsgService) { }

  // getDishes(): Promise<Dish[]> {
  //   // return new  Promise(resolve =>{
  //   //   //Simulate server latency with 2sec delay
  //   //   setTimeout(() => resolve (DISHES), 2000);
  //   // });

  //   return Observable.of(DISHES).delay(2000).toPromise();
  // }

  getDishes(): Observable<Dish[]> {
   // return Observable.of(DISHES).delay(2000);
     return this.http.get(baseURL + 'dishes')
     .map(res => {
       return this.processHttpmsgService.extractData(res);
     })
     .catch(error => {return this.processHttpmsgService.handleError(error); });
  }

  // getDish(id: number): Promise<Dish> {
  //   return new  Promise(resolve =>{
  //     //Simulate server latency with 2sec delay
  //     setTimeout(() => resolve(DISHES.filter((dish) => dish.id === id)[0]), 2000);
  //   });
  //   //return Observable.of(DISHES.filter((dish) => dish.id === id)[0]).delay(2000).toPromise();
  // }

  getDish(id: number): Observable<Dish> {
   // return Observable.of(DISHES.filter((dish) => dish.id === id)[0]).delay(2000);
   return this.http.get(baseURL + 'dishes/' + id)
   .map(res => {
     return this.processHttpmsgService.extractData(res);
  //   .catch(error => {return this.processHttpmsgService.handleError(error); });
   })
   .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  // getFeaturedDish(): Promise<Dish> {
  //   return new  Promise(resolve =>{
  //     //Simulate server latency with 2sec delay
  //     setTimeout(() => resolve(DISHES.filter(dish => dish.featured)[0]), 2000);
  //   });
  //   //return Observable.of(DISHES.filter(dish => dish.featured)[0]).delay(2000).toPromise();
  // }
  
  getFeaturedDish(): Observable<Dish> {
   // return Observable.of(DISHES.filter(dish => dish.featured)[0]).delay(2000);
   return this.http.get(baseURL + 'dishes?featured=true')
   .map(res => {
     return this.processHttpmsgService.extractData(res)[0];
   })
   .catch(error => {return this.processHttpmsgService.handleError(error); });
  }
  

  getDishIds(): Observable<number[]> {
    //return Observable.of(DISHES.map(dish => dish.id)).delay(2000);
    return this.getDishes()
    .map(dishes => {
      return dishes.map(dish => dish.id);
    })
    //.catch(error => { return error; })
   // .catch(error => {return this.processHttpmsgService.handleError(error); });
  }

}
