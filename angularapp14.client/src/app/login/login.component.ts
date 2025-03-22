import { Component } from '@angular/core';
import { AdnanService } from '../service/adnan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _myser: AdnanService, private _route: Router) { }

  userData: any
  getDataUser(logedUser: any) {
    this._myser.getUserLogin().subscribe((data: any) => {
      let userData = data.find((x: any) => x.Email == logedUser.Email && x.password == logedUser.password);

      if (userData) {
        sessionStorage.setItem('loggeduser', JSON.stringify(userData));
        alert("Login Successfully");
        this._route.navigate(["/profile"]);
      } else {
        alert("Invalid email or password");
      }
    })
  }

}
