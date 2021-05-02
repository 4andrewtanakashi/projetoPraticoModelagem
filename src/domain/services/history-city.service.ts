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
        console.log("TESTE loadByCityies");
        console.log("this._storage II: ", this._storage);
        let citiesAux = [];
        this._storage?.forEach( (key, value, index) => {
            console.log("key 00", key);
            citiesAux.push(key);
        })
        .then( _ => {
            console.log("cities II: ", citiesAux);
            return citiesAux;
        } )
        .catch( (error) => {
            return Promise.reject(error);
        });
        console.log("citiesIV: ", citiesAux);
        return citiesAux;
    }
}