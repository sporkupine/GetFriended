import { Injectable } from '@angular/core';
import { UserService } from '../user.service';

@Injectable({ providedIn: 'root' })
export class AlertService {

  constructor(private userService: UserService) {

  }

  showModal(){

  }

  hideModal(){

  }
}

// need a way to update component properties that in turn dynamically show or hide
// the alert modal. Event Emitters??? Observables?? Will have to ask in class
