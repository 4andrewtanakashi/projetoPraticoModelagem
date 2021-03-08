import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchCityByNameService } from 'src/domain/services/search-city-by-name.service';
import { FakeCityRepository } from 'src/data/fake/fake-city-repository';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: SearchCityByNameService,
      useFactory: () => {
        return new SearchCityByNameService(new FakeCityRepository());
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
