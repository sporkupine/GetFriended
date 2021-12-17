import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Output() message: string;
  @Output() close = new EventEmitter();
  @Input() friendModal: string;

  constructor() {}

  onCloseModal() {
    this.close.emit();
  }

  showAddModal(friendModal: User) {
    let name = friendModal.name;
    this.message = `You are now friends with ${name}!`;
  }

  showDeleteModal(user: User) {
    let name = user.name;
    this.message = `You are no longer friends with ${name}.`;
  }
}
