import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'hero-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  submitted = false;

  model = new User();
  public thug: any;

  constructor(private heroservice: HeroService) { }

  getHeroName() {
    this.submitted = true;
    this.heroservice.getSuperHeroName(this.model)
      .subscribe(response => this.model = {
        superHero: response
      });
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
