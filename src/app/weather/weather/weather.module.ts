import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FavoritesPage } from './pages/favorites/favorites.page';
import { SearchPage } from './pages/search/search.page';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherOfLocationComponent } from './pages/weather-of-location/weather-of-location.component';
import { ForacastComponent } from './pages/foracast/foracast.component';
import { CurrentWeatherComponent } from './pages/current-weather/current-weather.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule}from '../../material.module'



@NgModule({
  declarations: [
    SearchPage, 
    FavoritesPage, WeatherOfLocationComponent, ForacastComponent, CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WeatherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class WeatherModule { }
