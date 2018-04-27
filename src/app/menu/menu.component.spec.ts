import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButton, MatCheckbox, MatListModule, MatGridListModule, MatCardModule,MatToolbarModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule, MatSliderModule, MatButtonModule} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { DISHES } from '../shared/dishes';
import { baseURL} from '../shared/baseurl'; 

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { MenuComponent } from './menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  let dishServiceStub = {
    getDishes: function(): Observable<Dish[]>{
      return Observable.of(DISHES);
    }
  };

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ MenuComponent ],
  //     imports: [
  //       BrowserModule,
  //       BrowserAnimationsModule,
  //       FlexLayoutModule,
  //       MatToolbarModule,
  //       MatListModule,
  //       MatGridListModule,
  //       MatCardModule,
  //       MatButtonModule,
  //       AppRoutingModule,
  //       MatCheckboxModule,
  //       MatInputModule,
  //       MatSelectModule,
  //       MatProgressSpinnerModule,
  //       MatSliderModule,
  //       RouterTestingModule.withRoutes(
  //         [{path: 'menu', component: MenuComponent}]
  //       )
  //     ],
  //     providers :[
  //       {provide: DishService, useValue: dishServiceStub},
  //       {provide: 'BaseURL', useValue: baseURL}
  //     ]
  //   })
  //   .compileComponents();

  //   let dishService = TestBed.get(DishService);
  // }));
  beforeEach(async(() => {

    let dishServiceStub = {
      getDishes: function(): Observable<Dish[]> {
        return Observable.of(DISHES);
      }
    };

    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule,
        MatToolbarModule,
              MatListModule,
              MatGridListModule,
              MatCardModule,
              MatButtonModule,
              AppRoutingModule,
              MatCheckboxModule,
              MatInputModule,
              MatSelectModule,
              MatProgressSpinnerModule,
              MatSliderModule,
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{ path: 'menu', component: MenuComponent }])
      ],
      declarations: [ MenuComponent ],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: 'BaseURL', useValue: baseURL },
      ]
    })
    .compileComponents();

    let dishservice = TestBed.get(DishService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
