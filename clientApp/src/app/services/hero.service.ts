import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  superHero: string;

  constructor(private http: HttpClient) { }

  getSuperHeroName(user: User) {
    // http call to backend
    // return this.http.get('assets/testdata.json');
    return this.http.get('https://7mo9pdmdbd.execute-api.eu-west-1.amazonaws.com/development/superhero');
  }
}
