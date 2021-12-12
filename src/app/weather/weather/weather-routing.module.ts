import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPage } from './pages/search/search.page';
import {FavoritesPage}from './pages/favorites/favorites.page';
import {WeatherOfLocationComponent}from './pages/weather-of-location/weather-of-location.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchPage,  
    children: [
  //    { path: 'weatheroflocation', component: WeatherOfLocationComponent } 
      { path: 'weatheroflocation/:key', component: WeatherOfLocationComponent}
    ]} ,{
   
    path: 'weatheroflocation/:key',
    component: WeatherOfLocationComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
