import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private color: string;
  private power: string;
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getSuperHeroName(user: User): Observable<any> {
    // http call to backend
    this.color = user.givenname[0].toUpperCase();
    this.power = user.surname[0].toUpperCase();

    // return this.http.get('assets/testdata.json');
    return this.http.get(`${this.url}color=${this.color}&power=${this.power}`);
  }
}
