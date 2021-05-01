import { City } from '../entities/city';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'

@Injectable({ providedIn: 'root' })
export class HistoryCityService {
    private _storage: Storage | null = null;

    constructor(private storage: Storage) {
       this.init();
    }

    async isEmpty () : Promise<boolean> {
        const value = await this._storage?.length();
        return (value == 0)? true : false;
    }

    async init() {
        await this.storage.defineDriver(CordovaSQLiteDriver);
        const storage = await this.storage.create();
        this._storage = storage;
    }

    async saveByCity (cityKey: string, city: City) {
        await this._storage?.set(cityKey, city);
    }

    async loadByCityies () : Promise<City[]> {
        
        let cities: City[];
        await this._storage?.forEach(async (key, value, index) => {
            const city = await this._storage?.get(key);
            console.log("key: ", key, "value", city);
            cities.push(city);
        })
        .then( _ => { 
            console.log("cities1: ", cities);
            return Promise.resolve(cities); } )
        .catch( (error) => {
            return Promise.reject(error);
        });
        return cities;
    }
}