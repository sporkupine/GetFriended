import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../shared/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postsSubject = new Subject<Post[]>();

  constructor() {}

  posts: Post[] = [
    {
      name: 'John Starfish',
      content: 'This is my first post.',
    },
    {
      name: 'Tyler Joe',
      content: 'I need a vacation.',
    },
    {
      name: 'Jimmy Joe Johnson',
      content: 'I hate my name.',
    },
    {
      name: 'Billy Barracuda',
      content: 'Stop polluting the oceans!',
    },
    {
      name: 'Eugene Krabs',
      content: 'Pearl made me sign up for this new site',
    },
    {
      name: 'Squidward Tentacles',
      content:
        'Anybody know how to get a neighbor evicted? Asking for a friend.',
    },
  ];

  onSubmitPost(postText) {
    if (postText == '') {
      return;
    } else {
      this.posts.push({ name: '', content: postText });
      this.postsSubject.next(this.posts.slice());
    }
  }

  getPosts() {
    return this.posts;
  }
}
