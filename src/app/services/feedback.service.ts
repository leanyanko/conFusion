import { Injectable } from '@angular/core';

import { Feedback } from '../shared/feedback';

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
export class FeedbackService {

  constructor(private restangular: Restangular, 
               private processHttpmsgService: ProcessHttpmsgService) { }

            //    getFeedbacks(): Observable<Feedback[]> {
            //     return this.restangular.all('feedbacks').getList();
            //  }
           
            //  getFeedback(id: number): Observable<Feedback> {
            //   return this.restangular.one('feedbacks', id).get();
            //  }
 
            //  getFeedbackIds(): Observable<number[]> {
            //    return this.getFeedbacks()
            //    .map(feedbacks => {
            //      return feedbacks.map(feedback => feedback.id);
            //    })
            //  }
            submitFeedback(feedback: Feedback):Observable<Feedback>{
              return this.restangular.all('feedback').post(feedback);
              //console.log(feedback);
          
            }

}
