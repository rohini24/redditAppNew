import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'homePage',
    loadChildren: () => import('./m-home-page/m-home-page.module').then(mod => mod.MHomePageModule)
  },
  {
    path: '',
    redirectTo: '/homePage',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
