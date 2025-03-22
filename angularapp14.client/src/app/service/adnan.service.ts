import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdnanService {

  constructor(private _http: HttpClient) { }



  // data of users

  postRegistrationUser(data: any) {
    return this._http.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data)
  }

  getUserLogin() {
    return this._http.get("https://67cea6ee125cd5af757b6514.mockapi.io/Users")
  }


  updateUser(id: any, userData: any): Observable<any> {
    return this._http.put(`https://67cea6ee125cd5af757b6514.mockapi.io/Users/${id}`, userData);
  }



}
