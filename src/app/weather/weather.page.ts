import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  constructor(private readonly modalCtrl: ModalController) {}

  ngOnInit() {}

  async onSeeDetails() {
    const modal = await this.modalCtrl.create({
      component: WeatherDetailsComponent,
    });
    modal.present();
  }
}
