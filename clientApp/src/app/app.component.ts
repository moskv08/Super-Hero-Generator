import { Component } from '@angular/core';
import { HeroService } from './services/hero.service';
import { Superhero } from './models/superhero';
import { User } from './models/user';

@Component({
  selector: 'hero-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super Hero App';
  superHero: Superhero;

  constructor(private heroservice: HeroService) { }

  getHeroName(user: User) {
    this.superHero = this.heroservice.getSuperHeroName(user);
  }
}
