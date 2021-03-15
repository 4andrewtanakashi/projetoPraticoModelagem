import { HttpClient } from '@angular/common/http';

import { Coordinate } from 'src/domain/entities/coordinate';
import { Weather } from 'src/domain/entities/weather';
import { WeatherRepository } from 'src/domain/services/protocols/weather-repository';
import { environment } from 'src/environments/environment';

import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UnavailableServiceError } from 'src/domain/errors/unavailable-service.error';

export class ApiWeatherRepository extends WeatherRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  async load(coord: Coordinate): Promise<Weather> {
    return this.http
      .get(
        `${environment.api_config.api_url}?lat=${coord.latitude}&lon=${coord.longitude}&exclude=minutely,hourly,alerts&lang=pt_br&units=metric&appid=${environment.api_config.api_key}`
      )
      .pipe(
        map(this.toEntity),
        catchError(error => throwError(new UnavailableServiceError()))
      )
      .toPromise();
  }

  private toEntity(data: any): Weather {
    if (!data) {
      return null;
    }

    const numOfDailyWeathers = 3;
    const weather: Weather = {
      currentTemp: data.current.temp,
      details: [],
    };

    for (let i = 0; i < numOfDailyWeathers; i++) {
      weather.details.push({
        condition: data.daily[i].weather[0].description,
        conditionIconUrl: `${environment.api_config.api_icon_url}/${data.daily[i].weather[0].icon}@2x.png`,
        pop: data.daily[i].pop * 100,
        humidity: data.daily[i].humidity,
        minTemp: data.daily[i].temp.min,
        maxTemp: data.daily[i].temp.max,
      });
    }

    return weather;
  }
}
