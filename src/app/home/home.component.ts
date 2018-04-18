import { Component, OnInit, Inject } from '@angular/core';

import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import { baseURL } from '../shared/baseurl';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
      '@flyInOut': 'true',
      'style': 'display: block'   
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish : Dish;
  promotion : Promotion;
  leader: Leader;
  errMsgDish: string;
  constructor(private dishService: DishService, 
              private promotionService: PromotionService, 
              private leaderService: LeaderService,
              @Inject('BaseURL') private BaseURL) { 
              //  console.log("URL IS " + baseURL)
              }

  ngOnInit() {
    this.dishService.getFeaturedDish()
    .subscribe(dish => this.dish = dish,
               errmess => this.errMsgDish = <any>errmess);

    this.promotionService.getFeaturedPromotion()
    .subscribe(promo => this.promotion = promo);

    this.leaderService.getFeaturedLeader()
    .subscribe(leader => this.leader = leader);
  }

}
