import { City } from '../entities/city';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HistoryCityService {
    private _storage: Storage | null = null;

    constructor(private storage: Storage) { }

    async initHist() {
        const storage = await this.storage?.create()
        this._storage = storage;
        console.log("this._storage I: ", this._storage);
    }

    async saveByCity (cityKey: string, city: City) {
        this._storage?.set(cityKey, city);
    }

    async loadByCityies () : Promise<City[]> {
        let citiesAux = [];
        this._storage?.forEach( (key, value, index) => {
            citiesAux.push(key);
        })
        .then( _ => {
            return citiesAux;
        } )
        .catch( (error) => {
            return Promise.reject(error);
        });
        return citiesAux;
    }
}