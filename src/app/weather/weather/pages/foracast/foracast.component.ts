import { Component, Input, OnInit } from '@angular/core';
import { DailyForecast, Forecast } from 'src/app/shared/models/forecast.model';

@Component({
  selector: 'forecast',
  templateUrl: './foracast.component.html',
  styleUrls: ['./foracast.component.scss']
})
export class ForacastComponent implements OnInit {



  ngOnInit(): void {}
   
  @Input()
  forecast: DailyForecast | undefined 
}
