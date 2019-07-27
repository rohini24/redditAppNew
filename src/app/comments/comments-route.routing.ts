import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsPageComponent } from './comments-page/comments-page.component';

const routes: Routes = [
  {
    path: '',
    component: CommentsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRouteModule { }