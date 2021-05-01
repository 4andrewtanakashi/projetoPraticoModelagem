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

  constructor(
    private readonly searchService: SearchCityService,
    private readonly router: Router,
    //private readonly historyService: HistoryCityService,
  ) {}

//   async onLisCitiesHist () {
//       this.citiesHist = await this.historyService.loadByCityies();
//   }

  async onSearch(query: string) {
    try {
      this.hasError = false;
      this.cities = await this.searchService.search(query);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }

  onSelectCity(cityId: string) {
    // if (city != null)
    //   this.historyService.saveByCity(cityId, city);
    this.router.navigateByUrl(`/weather/${cityId}`);
  }
}
