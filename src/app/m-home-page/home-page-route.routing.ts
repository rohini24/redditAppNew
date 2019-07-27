import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path: 'comments',
    loadChildren: () => import('./../comments/comments.module').then(mod => mod.CommentsModule)
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRouteModule { }
