import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {
  constructor(private readonly modalCtrl: ModalController) {}

  ngOnInit() {}

  onClose() {
    this.modalCtrl.dismiss();
  }
}
