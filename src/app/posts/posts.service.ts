import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

    constructor() { }

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
          content: 'I hate my name.'
        },
        {
          name: 'Billy Barracuda',
          content: 'Stop polluting the oceans!'
        }
    ];

    getPosts() {
        return this.posts;
    }

}
