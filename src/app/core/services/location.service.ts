import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Location } from 'src/app/shared/models/location.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private httpClient: HttpClient) {}

  getAutocompleteLocation(searchText: string): Observable<Location[]> {
    let params: HttpParams = new HttpParams();
    params = params.append('apikey', environment.apiKey);
    params = params.append('q', searchText);
    
  return this.httpClient.get<Location[]>('http://dataservice.accuweather.com/locations/v1/cities/autocomplete', { params });
  return of([
    {
        "Version": 1,
        "Key": "28143",
        "Type": "City",
        "Rank": 10,
        "LocalizedName": "Dhaka",
        "Country": {
            "ID": "BD",
            "LocalizedName": "Bangladesh"
        },
        "AdministrativeArea": {
            "ID": "C",
            "LocalizedName": "Dhaka"
        }
    },
    {
        "Version": 1,
        "Key": "202396",
        "Type": "City",
        "Rank": 11,
        "LocalizedName": "Delhi",
        "Country": {
            "ID": "IN",
            "LocalizedName": "India"
        },
        "AdministrativeArea": {
            "ID": "DL",
            "LocalizedName": "Delhi"
        }
    },
    {
        "Version": 1,
        "Key": "58185",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Dongguan",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "GD",
            "LocalizedName": "Guangdong"
        }
    },
    {
        "Version": 1,
        "Key": "102133",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Dalian",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "LN",
            "LocalizedName": "Liaoning"
        }
    },
    {
        "Version": 1,
        "Key": "60971",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Deyang",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "SC",
            "LocalizedName": "Sichuan"
        }
    },
    {
        "Version": 1,
        "Key": "60631",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Dezhou",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "SD",
            "LocalizedName": "Shandong"
        }
    },
    {
        "Version": 1,
        "Key": "61417",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Dali Prefecture",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "YN",
            "LocalizedName": "Yunnan"
        }
    },
    {
        "Version": 1,
        "Key": "2333431",
        "Type": "City",
        "Rank": 15,
        "LocalizedName": "Dazhou",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "SC",
            "LocalizedName": "Sichuan"
        }
    },
    {
        "Version": 1,
        "Key": "106771",
        "Type": "City",
        "Rank": 15,
        "LocalizedName": "Datong",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "SX",
            "LocalizedName": "Shanxi"
        }
    },
    {
        "Version": 1,
        "Key": "297442",
        "Type": "City",
        "Rank": 20,
        "LocalizedName": "Dakar",
        "Country": {
            "ID": "SN",
            "LocalizedName": "Senegal"
        },
        "AdministrativeArea": {
            "ID": "DK",
            "LocalizedName": "Dakar"
        }
    }
])
  }

  getLocationByKey(locationKey: string): Observable<Location> {
    let params: HttpParams = new HttpParams();
    params = params.append('apikey', environment.apiKey);

    return this.httpClient.get<Location>(`http://dataservice.accuweather.com/locations/v1/${locationKey}`, { params });
  }
}
