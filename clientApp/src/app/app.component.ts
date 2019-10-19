import { Component } from '@angular/core';

@Component({
  selector: 'hero-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super Hero App';
  description = 'Enter your name and get a super hero name assigned.';

  constructor() { }
}
