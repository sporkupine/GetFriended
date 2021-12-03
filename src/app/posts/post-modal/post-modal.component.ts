import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit {
  @Input() creatingPost: boolean;


  constructor() { }

  ngOnInit(): void {
  }


  onCloseModal() {
    this.creatingPost = false;
  }

}
