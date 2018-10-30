import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  readonly BASE_URL: String = "https://api.themoviedb.org/3";
  readonly API_KEY: String = "95271f7ae02516ad7da29d5575517f02";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.BASE_URL + "/movie/76341?api_key=" + this.API_KEY);
  }

}
