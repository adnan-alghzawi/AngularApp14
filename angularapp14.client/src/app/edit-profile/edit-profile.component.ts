
import { AdnanService } from '../service/adnan.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  @Input() user: any;

  @Output() userUpdated = new EventEmitter<any>();
  constructor(private _ser: AdnanService) { }

  userId: any;
  savaChanges() {

    this.userUpdated.emit(this.user);

  }


}
