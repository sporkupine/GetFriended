import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit {
  @Input() creatingPost: boolean;
  @Output() close = new EventEmitter<void>();


  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }


  onCloseModal() {
    this.close.emit();
  }

}
