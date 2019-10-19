import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  superHero: string;

  constructor() { }

  getSuperHeroName(user: User) {
    // http call to backend
    // http.get(user.givenname, user. surname);

    // const response = { name: 'Black Mamba' };
    // this.superHero = JSON.parse(response.name);
    // return this.superHero;
    return 'Black Mamba';
  }
}
