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
            post: 'This is my first post.',
        },
        {
            name: 'Tyler Joe',
            post: 'I need a vacation.',
        }
    ];

    getPosts() {
        return this.posts;
    }

}
