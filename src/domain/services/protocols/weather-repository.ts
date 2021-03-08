import { Coordinate } from 'src/domain/entities/coordinate';
import { Weather } from 'src/domain/entities/weather';

export abstract class WeatherRepository {
  abstract load(coord: Coordinate): Promise<Weather>;
}
