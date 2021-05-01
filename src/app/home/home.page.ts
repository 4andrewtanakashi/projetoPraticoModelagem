import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/domain/entities/city';
import { SearchCityService } from 'src/domain/services/search-city.service';
import { HistoryCityService } from 'src/domain/services/history-city.service';

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
  ) {
    this.setHasHistory();
    if (this.setHasHistory) {
      this.onLisCitiesHist();
    }
  }

  async setHasHistory () {
    this.hasHistory = await this.historyService.isEmpty();
  }

  async onLisCitiesHist () {
      this.citiesHist = await this.historyService.loadByCityies();
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
    console.log("cityId: ", city.name, "city: ", city);
    this.historyService.saveByCity(city.name, city);
    this.router.navigateByUrl(`/weather/${cityId}`);
  }
}
