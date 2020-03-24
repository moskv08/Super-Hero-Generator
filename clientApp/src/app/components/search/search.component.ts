import { Component, OnInit, Output } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'hero-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private heroservice: HeroService) { }

  loading: boolean;
  model: User;
  error: string;

  ngOnInit() {
    this.loading = false;
    this.model = new User();
  }

  getHeroName() {
    this.loading = true;

    this.heroservice.getSuperHeroName(this.model)
      .subscribe(
        response => this.model = { superHero: response },
        error => this.error = error
        );

    this.loading = false;

  }

  // TODO: Remove this when done testing
  // get diagnostic() { return JSON.stringify(this.model); }

}
