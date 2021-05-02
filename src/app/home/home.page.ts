import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/domain/entities/city';
import { SearchCityService } from 'src/domain/services/search-city.service';
import { HistoryCityService } from 'src/domain/services/history-city.service';
import { cities } from 'src/data/data-source/br-cities';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  hasError: boolean = false;
  errorMessage: string;
  citiesHist: City[];
  hasHistory: boolean = false;

  constructor(
    private readonly searchService: SearchCityService,
    private readonly router: Router,
    private readonly historyService: HistoryCityService,
  ) { }

  async ngOnInit() {
    this.historyService.initHist()
      .then( async _ => {
        await this.historyService.loadByCityies()
          .then( cities => { 
            this.cities = cities;
            console.log("this.cities Internal: ", this.cities);
            if (this.cities.length != 0) {
              console.log("this.hasHistory", this.hasHistory);
              this.hasHistory = true
            };
          } );
      } );
  }

  async onSearch(query: string) {
    try {
      this.hasError = false;
      this.cities = await this.searchService.search(query);
      this.hasHistory = false;
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }

  onSelectCity(cityId: string, city: City) {
    this.historyService.saveByCity(city.name, city);
    this.router.navigateByUrl(`/weather/${cityId}`);
  }
}
