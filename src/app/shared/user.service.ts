import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users: User[] = [
    {
      id: 0,
      name: 'Example Examplington',
      imagePath: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      bio: 'I have always felt I would make an excellent example of a typical user on a website!',
      posts: [],
    },
    {
      id: 1,
      name: 'TheUltimateWarrior@hotmail.com',
      imagePath:
        'https://www.biography.com/.image/t_share/MTgwNzg0MTk2OTQ2NTY4NTUy/ultimate-warrior-03.jpg',
      bio: 'I like to Gorilla Press my enemis for Breakfast',
      posts: [],
    },
    {
      id: 2,
      name: 'TheRealBobaFett@gmail.com',
      imagePath:
        'https://nypost.com/wp-content/uploads/sites/2/2021/09/book-of-boba-fett-key-art.jpg?quality=80&strip=all',
      bio: '....as you wish..',
      posts: [],
    },
    {
      id: 3,
      name: 'MrWolfman@gmail.com',
      imagePath:
        'https://i.pinimg.com/originals/4c/75/8a/4c758a89ee726431a8902e01b008dd7a.jpg',
      bio: 'I love beef Chowmein',
      posts: []
    },
  ];

  getUsers() {
    return this.users.slice();
  }

  getUserById(id: number) {
    // ===
    const user = this.users.find((user) => user.id === id);
    console.log(this.users);
    return user;
  }
}
