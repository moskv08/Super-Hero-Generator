import { Component, OnInit } from '@angular/core';
import { Superhero } from 'src/app/models/superhero';
import { HeroService } from 'src/app/services/hero.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'hero-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  superHero: Superhero;
  submitted = false;

  model = new User();

  constructor(private heroservice: HeroService) { }

  getHeroName() {
    this.submitted = true;
    this.model.superHero = this.heroservice.getSuperHeroName(this.model);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
