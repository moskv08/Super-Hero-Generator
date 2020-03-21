import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'hero-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private heroservice: HeroService) { }

  ngOnInit() {
  }

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
