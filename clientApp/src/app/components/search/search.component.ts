import { Component } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'hero-search',
  templateUrl: './search.component.html',
  styles: ['img { width: 200px; }']
})
export class SearchComponent {

  constructor(private heroservice: HeroService) { }

  submitted = false;
  model = new User();

  getHeroName() {
    this.submitted = true;
    this.heroservice.getSuperHeroName(this.model)
      .subscribe(response => this.model = {
        superHero: response
      });
  }
  // TODO: Remove this when done testing
  get diagnostic() { return JSON.stringify(this.model); }

}
