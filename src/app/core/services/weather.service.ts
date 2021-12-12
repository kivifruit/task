import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { CurrentWeather } from 'src/app/shared/models/currentWeather.model';
import { Forecast } from 'src/app/shared/models/forecast.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  isMetric = true;

  temperatureUnitChanged = new Subject<null>();


  constructor(private httpClient: HttpClient) {}

  getForecast(locationKey: string): Observable<Forecast> {
    const isMetric = this.isMetric ? 'true' : 'false';

    let params: HttpParams = new HttpParams();
    params = params.append('apikey', environment.apiKey);
    params = params.append('metric', isMetric);
return this.httpClient.get<Forecast>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`, { params });
    return of({
      "Headline": {
          "EffectiveDate": "2021-12-10T13:00:00+08:00",
          "EffectiveEpochDate": 1639112400,
          "Severity": 4,
          "Text": "Air quality will be unhealthy for sensitive groups Friday afternoon through Wednesday morning",
          "Category": "air quality",
          "EndDate": "2021-12-15T13:00:00+08:00",
          "EndEpochDate": 1639544400,
          "MobileLink": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?unit=c&lang=en-us"
      },
      "DailyForecasts": [
          {
              "Date": "2021-12-10T07:00:00+08:00",
              "EpochDate": 1639090800,
              "Temperature": {
                  "Minimum": {
                      "Value": -10,
                      "Unit": "C",
                      "UnitType": 17
                  },
                  "Maximum": {
                      "Value": 4,
                      "Unit": "C",
                      "UnitType": 17
                  }
              },
              "Day": {
                  "Icon": 7,
                  "IconPhrase": "Cloudy",
                  "HasPrecipitation": false,
                  "LocalSource": {
                      "Id": 7,
                      "Name": "Huafeng",
                      "WeatherCode": "02"
                  }
              },
              "Night": {
                  "Icon": 7,
                  "IconPhrase": "Cloudy",
                  "HasPrecipitation": false,
                  "LocalSource": {
                      "Id": 7,
                      "Name": "Huafeng",
                      "WeatherCode": "02"
                  }
              },
              "Sources": [
                  "AccuWeather",
                  "Huafeng"
              ],
              "MobileLink": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?day=1&unit=c&lang=en-us",
              "Link": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?day=1&unit=c&lang=en-us"
          },
          {
              "Date": "2021-12-11T07:00:00+08:00",
              "EpochDate": 1639177200,
              "Temperature": {
                  "Minimum": {
                      "Value": -16,
                      "Unit": "C",
                      "UnitType": 17
                  },
                  "Maximum": {
                      "Value": 3,
                      "Unit": "C",
                      "UnitType": 17
                  }
              },
              "Day": {
                  "Icon": 7,
                  "IconPhrase": "Cloudy",
                  "HasPrecipitation": false,
                  "LocalSource": {
                      "Id": 7,
                      "Name": "Huafeng",
                      "WeatherCode": "02"
                  }
              },
              "Night": {
                  "Icon": 34,
                  "IconPhrase": "Mostly clear",
                  "HasPrecipitation": false,
                  "LocalSource": {
                      "Id": 7,
                      "Name": "Huafeng",
                      "WeatherCode": "00"
                  }
              },
              "Sources": [
                  "AccuWeather",
                  "Huafeng"
              ],
              "MobileLink": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?day=2&unit=c&lang=en-us",
              "Link": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?day=2&unit=c&lang=en-us"
          },
          {
              "Date": "2021-12-12T07:00:00+08:00",
              "EpochDate": 1639263600,
              "Temperature": {
                  "Minimum": {
                      "Value": -16,
                      "Unit": "C",
                      "UnitType": 17
                  },
                  "Maximum": {
                      "Value": -2,
                      "Unit": "C",
                      "UnitType": 17
                  }
              },
              "Day": {
                  "Icon": 3,
                  "IconPhrase": "Partly sunny",
                  "HasPrecipitation": false,
                  "LocalSource": {
                      "Id": 7,
                      "Name": "Huafeng",
                      "WeatherCode": "00"
                  }
              },
              "Night": {
                  "Icon": 33,
                  "IconPhrase": "Clear",
                  "HasPrecipitation": false,
                  "LocalSource": {
                      "Id": 7,
                      "Name": "Huafeng",
                      "WeatherCode": "00"
                  }
              },
              "Sources": [
                  "AccuWeather",
                  "Huafeng"
              ],
              "MobileLink": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?day=3&unit=c&lang=en-us",
              "Link": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?day=3&unit=c&lang=en-us"
          },
          {
              "Date": "2021-12-13T07:00:00+08:00",
              "EpochDate": 1639350000,
              "Temperature": {
                  "Minimum": {
                      "Value": -13,
                      "Unit": "C",
                      "UnitType": 17
                  },
                  "Maximum": {
                      "Value": 1,
                      "Unit": "C",
                      "UnitType": 17
                  }
              },
              "Day": {
                  "Icon": 3,
                  "IconPhrase": "Partly sunny",
                  "HasPrecipitation": false,
                  "LocalSource": {
                      "Id": 7,
                      "Name": "Huafeng",
                      "WeatherCode": "00"
                  }
              },
              "Night": {
                  "Icon": 33,
                  "IconPhrase": "Clear",
                  "HasPrecipitation": false,
                  "LocalSource": {
                      "Id": 7,
                      "Name": "Huafeng",
                      "WeatherCode": "00"
                  }
              },
              "Sources": [
                  "AccuWeather",
                  "Huafeng"
              ],
              "MobileLink": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?day=4&unit=c&lang=en-us",
              "Link": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?day=4&unit=c&lang=en-us"
          },
          {
              "Date": "2021-12-14T07:00:00+08:00",
              "EpochDate": 1639436400,
              "Temperature": {
                  "Minimum": {
                      "Value": -12,
                      "Unit": "C",
                      "UnitType": 17
                  },
                  "Maximum": {
                      "Value": 2,
                      "Unit": "C",
                      "UnitType": 17
                  }
              },
              "Day": {
                  "Icon": 3,
                  "IconPhrase": "Partly sunny",
                  "HasPrecipitation": false,
                  "LocalSource": {
                      "Id": 7,
                      "Name": "Huafeng",
                      "WeatherCode": "00"
                  }
              },
              "Night": {
                  "Icon": 33,
                  "IconPhrase": "Clear",
                  "HasPrecipitation": false,
                  "LocalSource": {
                      "Id": 7,
                      "Name": "Huafeng",
                      "WeatherCode": "00"
                  }
              },
              "Sources": [
                  "AccuWeather",
                  "Huafeng"
              ],
              "MobileLink": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?day=5&unit=c&lang=en-us",
              "Link": "http://www.accuweather.com/en/cn/datong/106771/daily-weather-forecast/106771?day=5&unit=c&lang=en-us"
          }
      ]
  })
  }

  getCurrentWeather(locationKey: string): Observable<CurrentWeather> {
    let params: HttpParams = new HttpParams();
    params = params.append('apikey', environment.apiKey);

 return this.httpClient.get<CurrentWeather>(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, { params });
//     return of({
//       "LocalObservationDateTime": "2021-12-10T17:16:00+08:00",
//       "EpochTime": 1639127760,
//       "WeatherText": "Overcast",
//       "WeatherIcon": 7,
//       "HasPrecipitation": false,
//       "PrecipitationType": null,
//       "LocalSource": {
//           "Id": 7,
//           "Name": "Huafeng",
//           "WeatherCode": "02"
//       },
//       "IsDayTime": false,
//       "Temperature": {
//           "Metric": {
//               "Value": 1.4,
//               "Unit": "C",
//               "UnitType": 17
//           },
//           "Imperial": {
//               "Value": 35,
//               "Unit": "F",
//               "UnitType": 18
//           }
//       },
//       "MobileLink": "http://www.accuweather.com/en/cn/datong/106771/current-weather/106771?lang=en-us",
//       "Link": "http://www.accuweather.com/en/cn/datong/106771/current-weather/106771?lang=en-us"
//   })
  }


}
