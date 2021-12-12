import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import{ WeatherService }from '../../../../core/services/weather.service';
import{ LocationService }from '../../../../core/services/location.service';
import { ForacastComponent } from '../foracast/foracast.component';
import { Location } from '../../../../shared/models/location.model';
import {CurrentWeather}from '../../../../shared/models/currentWeather.model';
import {DailyForecast}from '../../../../shared/models/forecast.model';

import { state } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from 'src/app/core/services/favorites.service';
@Component({
  selector: 'app-weather-of-location',
  templateUrl: './weather-of-location.component.html',
  styleUrls: ['./weather-of-location.component.scss']
})
export class WeatherOfLocationComponent implements OnInit {

  constructor(
    public active:ActivatedRoute,
    private  WeatherService : WeatherService ,
    private  LocationService : LocationService ,
    private FavoritesService:FavoritesService

  ) {   
     active.params.subscribe((param)=>{
    console.log(param)
this.key=param['key']; 
this.locationSub=this.LocationService.getLocationByKey(this.key).subscribe(succ=>{this.location=succ; this.favoriteSub=this.FavoritesService.getFavorites().subscribe(succ3=>{if (succ3.length==0 ){this.addremov="add"}else{this.favorites=succ3.filter(x=>{return x.Key===this.location.Key});console.log("f",this.favorites);this.addremov=this.favorites.length!=0?"remove":"add"}});
  this.weatherSub=this.WeatherService.getCurrentWeather(this.key).subscribe(succ1=>{
  this.currentWeather=succ1; this.currentWeather= this.currentWeather[0];});
  this.forcastSub=this.WeatherService.getForecast(this.key).subscribe(succ2=>{this.fivedaysforecast=succ2.DailyForecasts;});
  });
     }); 
} 
ngAfterContentChecked(){
 
}public locationSub:Subscription | undefined;
public weatherSub:Subscription | undefined;
public forcastSub:Subscription | undefined;
public favoriteSub:Subscription | undefined;


  public location!: Location;
  public currentWeather:any;
public fivedaysforecast:DailyForecast[]=[];
public key: string ="215854";
  public favorites: Location[] = [];
public addremov:string="add";

  ngOnInit(): void { 

}
addremove():void{
if(this.addremov==="add"){
this.FavoritesService.addToFavorites(this.location);
this.addremov="remove";
}
else{

  this.FavoritesService.removeFromFavorites(this.location.Key);
  this.addremov="add";
}
}
ngOnDestroy()
{
  if(this.favoriteSub)
  this.favoriteSub.unsubscribe();
  if(this.locationSub)
  this.locationSub.unsubscribe();
  if(this.weatherSub)
  this.weatherSub.unsubscribe();
  if( this.forcastSub)
  this.forcastSub.unsubscribe();
}
}
