
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importamos los composants
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
 
const routes: Routes = [
// To make the app navigate to the dashboard automatically

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //ici les routes
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],// pour initializer le router, forRoot configure le router dans la racine
  exports: [ RouterModule ]
})
export class AppRoutingModule {}