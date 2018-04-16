import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMsg: string;

 // selectedDish: Dish; // = DISHES[0];
  
  constructor( private dishService: DishService,
                @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    // this.dishService.getDishes()
    // .then(dishes => this.dishes = dishes);
      this.dishService.getDishes()
     .subscribe(dishes => this.dishes = dishes,
                errmess => this.errMsg = <any>errmess);
  }

  // onSelect(dish: Dish) {
  //   this.selectedDish = dish;
  // }

}
