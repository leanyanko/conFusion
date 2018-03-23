import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatM} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TestComponent } from './test/test.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TestComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
