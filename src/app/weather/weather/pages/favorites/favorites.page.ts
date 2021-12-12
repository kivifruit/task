import { Component } from '@angular/core';
import { Location } from '../../../../shared/models/location.model';
import { CurrentWeather } from '../../../../shared/models/currentWeather.model';
import{ FavoritesService }from '../../../../core/services/favorites.service';
import{ WeatherService }from '../../../../core/services/weather.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss']
})
export class FavoritesPage {
  weathers:any[]=[] ;
  constructor(  private  WeatherService : WeatherService ,private FavoritesService:FavoritesService,public router:Router) {this.favoriteSub= this.FavoritesService.getFavorites().subscribe(succ=>{this.FavorateLocations=succ;this.FavorateLocations.map(x=>{this.weatherSub=this.WeatherService.getCurrentWeather(x.Key).subscribe(succ=>{this.weathers.push(succ)})}) ;},err=>{console.log("err",err)});}
  FavorateLocations:Location[]=[];
  public weatherSub:Subscription | undefined;
  public favoriteSub:Subscription;
  onInit(){}
  currentWeather(index:number){
   return this.weathers[index][0];
 }
  
  details( key:string){
    {this.router.navigate(['weatheroflocation',key])}
  }
  ngOnDestroy()
{
 if(this.favoriteSub)
  this.favoriteSub.unsubscribe(); 
  if( this.weatherSub)
  this.weatherSub.unsubscribe();
}
}
