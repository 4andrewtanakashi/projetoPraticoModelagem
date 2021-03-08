import { Component } from '@angular/core';
import { City } from 'src/domain/entities/city';
import { SearchCityByNameService } from 'src/domain/services/search-city-by-name.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  hasError: boolean = false;
  errorMessage: string;

  constructor(private readonly searchService: SearchCityByNameService) {}

  async onSearch(query: string) {
    try {
      this.hasError = false;
      this.cities = await this.searchService.search(query);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }
}
