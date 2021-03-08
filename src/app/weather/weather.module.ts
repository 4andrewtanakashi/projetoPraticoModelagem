import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherPageRoutingModule } from './weather-routing.module';

import { WeatherPage } from './weather.page';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { CustomDatePipe } from '../shared/pipes/custom-date.pipe';
import { ErrorMessageComponent } from '../shared/components/error-message/error-message.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, WeatherPageRoutingModule],
  declarations: [
    WeatherPage,
    WeatherDetailsComponent,
    CustomDatePipe,
    ErrorMessageComponent,
  ],
})
export class WeatherPageModule {}
