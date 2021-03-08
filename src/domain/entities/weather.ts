import { City } from './city';
import { WeatherDetails } from './weather-details';

export type Weather = {
  city?: City;
  currentTemp: number;
  details: WeatherDetails[];
};
