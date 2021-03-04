import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
})
export class CityDetailsComponent implements OnInit {
  @Input() name: string;
  @Input() state: string;

  constructor() {}

  ngOnInit() {}
}
