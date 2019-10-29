import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getSuperHeroName(user: User): Observable<any> {
    // http call to backend
    // return this.http.get('assets/testdata.json');
    return this.http.get('https://7mo9pdmdbd.execute-api.eu-west-1.amazonaws.com/development/superhero');
  }
}
