import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherPageRoutingModule } from './weather-routing.module';

import { WeatherPage } from './weather.page';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherPageRoutingModule
  ],
  declarations: [WeatherPage, WeatherDetailsComponent]
})
export class WeatherPageModule {}
