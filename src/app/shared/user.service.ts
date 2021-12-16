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
      posts: [
        {
          name: 'Hello World!',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat modi exercitationem magnam libero quidem quibusdam iste beatae accusantium? Animi incidunt odio praesentium velit? Aperiam quo unde cumque ad! Sunt ratione pariatur inventore sapiente magni explicabo aperiam laborum perferendis blanditiis, praesentium, quae, aut voluptate a fuga? Aspernatur perferendis asperiores veniam voluptas?',
          date: new Date(2021, 6, 26, 11, 22),
        },
        {
          name: 'Scooby Dooby Doo, Where Are You?',
          content:
            'velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus',
          date: new Date(2021, 3, 23, 8, 51),
        },
      ],
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
      posts: [],
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
