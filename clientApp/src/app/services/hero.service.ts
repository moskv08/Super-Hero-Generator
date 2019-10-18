import { Injectable } from '@angular/core';
import { Superhero } from '../models/superhero';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  superHero: Superhero;

  constructor() { }

  getSuperHeroName(user: User) {
    // http call to backend
    this.superHero = new Superhero('Black', 'Mamba');
    return this.superHero;
  }
}
