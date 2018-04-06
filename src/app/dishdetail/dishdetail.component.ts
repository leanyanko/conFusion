import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchmap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {
  //@Input()
  dish : Dish;

  dishIds: number[];
  prev: number;
  next: number;
  
  constructor(private dishService: DishService, 
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // let id = +this.route.snapshot.params['id'];
    // console.log(id);

    this.route.params
    .switchMap((params: Params) =>  this.dishService.getDish(+params['id']))
    .subscribe(dish => this.dish = dish);

    // this.dishService.getDish(id)
    // .subscribe(dish => this.dish = dish);
  }

  goBack(): void{
    this.location.back();
  }

}
