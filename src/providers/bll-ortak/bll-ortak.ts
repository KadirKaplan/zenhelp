import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Injectable } from '@angular/core';


/*
  Generated class for the BllOrtakProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable({providedIn: 'root' })
export class BllOrtakProvider {

  url = "http://localhost:55816/Api/";
  constructor(private http: HttpClient,public https:HttpClientModule) {

  }

  httpPost(formData, controller, method) {
    return new Promise((res, err) => {
      this.http.post(this.url + controller + "/" + method, formData).subscribe(b => {

        res(b);
      })
    })
  }

}
