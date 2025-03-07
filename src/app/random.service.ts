import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Pets } from "./entities";

export interface RandomService {
  getDog(): Promise<Pets>;
  getCat(): Promise<Pets[]>;
}

@Injectable({
  providedIn: 'root'
})
export default class PetsService implements RandomService {
  private http: HttpClient = inject(HttpClient);
  private catRoute: string = 'https://api.thecatapi.com/v1/images/search?limit=10&include_breeds=true';
  private dogRoute: string = 'https://dog.ceo/api/breeds/image/random/5';

  // private catRoute: string = 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1';


  async getDog(): Promise<Pets> {
    const data = await lastValueFrom(this.http.get<{ message: string }>(this.dogRoute));
    return new Pets(data.message); 
  }

  async getCat(): Promise<Pets[]> {
    const data = await lastValueFrom(this.http.get<Array<{ url: string }>>(this.catRoute));
    return data.map(item => new Pets(item.url));
  }
}