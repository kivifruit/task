import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/shared/models/currentWeather.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  weather: any;
}
