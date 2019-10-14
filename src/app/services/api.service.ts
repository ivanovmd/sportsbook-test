import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = 'https://opentdb.com/api.php';

  constructor(
    private http: HttpClient
  ) { }

  getQuestions(options?) {
    let params = '';

    if (options) {
      if (options.category) {
        params += ('&category=' + options.category);
      }
    }

    return this.http.get(this.path + '?amount=3&type=multiple' + params);
  }
}
