import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {ScrollingModule} from '@angular/cdk/scrolling'
import { HomePageRouteModule } from './home-page-route.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    HomePageRouteModule,
    SharedModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class MHomePageModule { }
