import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { City } from 'src/domain/entities/city';
import { Weather } from 'src/domain/entities/weather';
import { UnavailableServiceError } from 'src/domain/errors/unavailable-service.error';
import { LoadWeatherService } from 'src/domain/services/load-weather.service';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {
  weather: Weather;
  today = new Date();
  cityId: number;

  hasError: boolean = false;
  errorMessage: string;
  canRetry: boolean = false;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly activatedRoute: ActivatedRoute,
    private readonly weatherService: LoadWeatherService,
    private readonly loadingCtrl: LoadingController
  ) {}

  ionViewDidEnter() {
    this.cityId = Number.parseInt(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
    this.loadWeather();
  }

  get currentDate() {
    const today = new Date();
    const weekDays = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ];
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');

    return `${weekDays[today.getDay()]}, ${day}/${month}`;
  }

  private async presentLoading() {
    (
      await this.loadingCtrl.create({
        message: 'Aguarde...',
      })
    ).present();
  }

  async loadWeather() {
    try {
      await this.presentLoading();
      this.hasError = false;
      this.canRetry = false;
      this.weather = await this.weatherService.loadByCity(this.cityId);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
      this.canRetry = error instanceof UnavailableServiceError;
    } finally {
      await this.loadingCtrl.dismiss();
    }
  }

  async onSeeDetails() {
    const modal = await this.modalCtrl.create({
      component: WeatherDetailsComponent,
      componentProps: {
        weatherDetails: this.weather.details,
      },
    });
    modal.present();
  }
}
