import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesPage } from './weather/weather/pages/favorites/favorites.page';
import { SearchPage } from './weather/weather/pages/search/search.page';
import { WeatherOfLocationComponent } from './weather/weather/pages/weather-of-location/weather-of-location.component';


const routes: Routes = [


  {
    path: 'search',
    component: SearchPage,children:[
      { path:'weatheroflocation',
    component:WeatherOfLocationComponent}
 ] },
  {
    path: 'search/:locationKey', 
    component: SearchPage,
  },
  // {
  //   path:'weatheroflocation',,loadChildren:"../weatheroflocation/weatheroflocation.module#editModule",
  //   component:WeatherOfLocationComponent
  // },
  {
    path: 'favorites',
    component: FavoritesPage,
  },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
