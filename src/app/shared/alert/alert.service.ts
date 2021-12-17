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
// the alert modal.

// will likely use an EventEmitter and @Output decorators on the components where we
// need to show the modal.
// possibly attach a string 'add' or 'delete' to the emitted event to dictate the
// message displayed by the modal.
