import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  message: string;

  constructor(private userService: UserService) {}

  onCloseModal(){

  }
}
