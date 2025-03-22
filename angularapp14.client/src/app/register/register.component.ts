import { Component } from '@angular/core';
import { AdnanService } from '../service/adnan.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _myser: AdnanService) { }

  ngOnIni() {

  }

  postDataUser(data: any) {
    this._myser.postRegistrationUser(data).subscribe(() => {

    })
  }

}
