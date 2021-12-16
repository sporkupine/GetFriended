import { Injectable } from '@angular/core';
import { Post } from './post.model';
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
          userName: 'Example Examplington',
          name: 'Hello World!',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat modi exercitationem magnam libero quidem quibusdam iste beatae accusantium? Animi incidunt odio praesentium velit? Aperiam quo unde cumque ad! Sunt ratione pariatur inventore sapiente magni explicabo aperiam laborum perferendis blanditiis, praesentium, quae, aut voluptate a fuga? Aspernatur perferendis asperiores veniam voluptas?',
          date: new Date(2021, 10, 26, 11, 22),
        },
        {
          userName: 'Example Examplington',
          name: 'Scooby Dooby Doo, Where Are You?',
          content:
            'velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus',
          date: new Date(2021, 3, 23, 8, 51),
        },
        {
          userName: 'Example Examplington',
          name: "You Want Some Dummy Text? Well I'll Give Ya Some Dummy Text!",
          content:
            'arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque',
          date: new Date(2020, 11, 16, 12, 14, 12),
        },
      ],
    },
    {
      id: 1,
      name: 'The Ultimate Warrior',
      imagePath:
        'https://www.biography.com/.image/t_share/MTgwNzg0MTk2OTQ2NTY4NTUy/ultimate-warrior-03.jpg',
      bio: 'I like to Gorilla Press my enemies for breakfast!',
      posts: [
        {
          userName: 'The Ultimate Warrior',
          name: 'Steroids and YOU: Get Big, Loud, and Mean Before Spring Break!',
          content:
            'ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam',
          date: new Date(2019, 4, 16, 20, 11),
        },
        {
          userName: 'The Ultimate Warrior',
          name: 'How to Safely Fall (or be thrown) Through A Table!',
          content:
            'suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque',
          date: new Date(2019, 3, 19, 19, 19),
        },
        {
          userName: 'The Ultimate Warrior',
          name: 'Everybody was Acting Except Hulk Hogan, All His Stuff Was Real.',
          content:
            'diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a',
          date: new Date(2021, 10, 19, 23, 21),
        },
      ],
    },
    {
      id: 2,
      name: 'Boba Fett',
      imagePath:
        'https://nypost.com/wp-content/uploads/sites/2/2021/09/book-of-boba-fett-key-art.jpg?quality=80&strip=all',
      bio: '....as you wish..',
      posts: [
        {
          userName: 'Boba Fett',
          name: 'Why You Should Buy Your Kid a Boba Fett Action Figure (and NOT a Mandalorian one) This Holiday Season',
          content:
            'justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque',
          date: new Date(2021, 11, 15, 14, 14),
        },
        {
          userName: 'Boba Fett',
          name: 'My Ship Was Cooler than the Millenium Falcon and You Know It',
          content:
            'velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus',
          date: new Date(2021, 10, 18, 18, 43),
        },
        {
          userName: 'Boba Fett',
          name: "So You Finally Got That Flamethrower You've Been Asking For. Now What?",
          content:
            'nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit',
          date: new Date(2021, 3, 23, 8, 51),
        },
      ],
    },
    {
      id: 3,
      name: 'The Wolf Man',
      imagePath:
        'https://i.pinimg.com/originals/4c/75/8a/4c758a89ee726431a8902e01b008dd7a.jpg',
      bio: 'I love beef chow mein',
      posts: [
        {
          userName: 'The Wolf Man',
          name: "I'm from a 1941 horror movie you probably haven't seen",
          content:
            'ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget',
          date: new Date(2021, 11, 11, 11, 51),
        },
        {
          userName: 'The Wolf Man',
          name: 'I was played by Lon Chaney, Jr.',
          content:
            'velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus',
          date: new Date(2021, 10, 7, 13, 22),
        },
        {
          userName: 'The Wolf Man',
          name: 'I have the coolest profile pic on this silly website',
          content: "...and it's not even close",
          date: new Date(2021, 9, 18, 17, 49),
        },
      ],
    },
  ];

  getUsers() {
    return this.users.slice();
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  fetchPosts(): Post[] {
    let allPosts = this.users.map((user) => user.posts);
    let mergedPosts = [].concat.apply([], allPosts);

    return mergedPosts;
  }
}
