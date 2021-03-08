import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FakeCityRepository } from 'src/data/fake/fake-city-repository';
import { SearchCityService } from 'src/domain/services/search-city.service';

const createSearchCityService = () => {
  return new SearchCityService(new FakeCityRepository());
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: SearchCityService,
      useFactory: createSearchCityService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
