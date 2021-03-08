import { City } from 'src/domain/entities/city';

export abstract class CityRepository {
  abstract getAll(): Promise<City[]>;
  abstract getById(id: number): Promise<City>;
}
