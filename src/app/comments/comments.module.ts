import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsPageComponent } from './comments-page/comments-page.component';
import { CommentsRouteModule } from './comments-route.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CommentsPageComponent
  ],
  imports: [
    CommonModule,
    CommentsRouteModule,
    SharedModule
  ],
  exports:[
    CommentsPageComponent
  ]
})
export class CommentsModule { }
