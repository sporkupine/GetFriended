import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  // ok go ahead
  // ahhhhhh


  users: User[] = [
    {
      id: 1,
      name: 'TheUltimateWarrior@hotmail.com',
      imagePath:
        'https://www.biography.com/.image/t_share/MTgwNzg0MTk2OTQ2NTY4NTUy/ultimate-warrior-03.jpg',
      bio: 'I like to Gorilla Press my enemies for Breakfast',
      posts: [{
        name: 'The Ultimate Warrior',
        content: 'I am from parts unknown!!'
      }],
    },
    {
      id: 2,
      name: 'TheRealBobaFett@gmail.com',
      imagePath:
        'https://nypost.com/wp-content/uploads/sites/2/2021/09/book-of-boba-fett-key-art.jpg?quality=80&strip=all',
      bio: '....as you wish..',
      posts: [{
        name: 'Boba Fett',
        content: 'Put Solo in the cargo hold'
      }],
    },
    {
      id: 3,
      name: 'MrWolfman@gmail.com',
      imagePath:
        'https://i.pinimg.com/originals/4c/75/8a/4c758a89ee726431a8902e01b008dd7a.jpg',
      bio: 'I love beef Chowmein',
      posts: [{
        name: 'The Wolfman',
        content: 'Beware the moon'
      }]
    },
  ];

  getUsers() {
    return this.users.slice();
  }

  getUser(id) {
    return this.users.filter((user) => {
      return user.id == id;
    });
  }
}
