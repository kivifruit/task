import { ChangeDetectorRef, Component } from '@angular/core';
import {LocationService}from '../../../../core/services/location.service';
import { Location } from '../../../../shared/models/location.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage {
  currentWeather: any;
  favorites!: Location[];
  
  constructor(
    public router: Router,
    private LocationService :LocationService,
) {console.log("telaviv",this.currentLocation)
  {this.router.navigate(['/search/weatheroflocation',this.currentLocation.Key])}
}
  isButtonDisabled = false;
  isSearchTextNotChanged = true;
   searchText: string='Tel Aviv';
  locations: Location[] = [];
  options:boolean=false;
  choose:boolean=true; 
  isFavorite: boolean = false;
  public autoLocatioSub: Subscription | undefined;
  currentLocation:Location=
    {
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "Country": {
            "ID": "IL",
            "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
            "ID": "TA",
            "LocalizedName": "Tel Aviv"
        }
    }
;
  Text!: string;
onInit(){
}
  onInputKeyUp(){
this.isButtonDisabled==true?this.isButtonDisabled=false:null
this.autoLocatioSub=this.LocationService.getAutocompleteLocation(this.searchText).subscribe(succ=>{
  this.locations=<Location[]>succ;this.choose=true;
})
  }
  check(location:Location){
    this.searchText=location.LocalizedName;
    this.currentLocation=location;
  }
  onSearchClick(){
    this.choose=false;
    this.isButtonDisabled = true;
  if(this.currentLocation!=null||this.searchText)
  {this.router.navigate(['/search/weatheroflocation',this.currentLocation.Key])}
  }
  ngOnDestroy()
{
  if(this.autoLocatioSub)
  this.autoLocatioSub.unsubscribe();
}
}

