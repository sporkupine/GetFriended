# GetFriended
---
```
Social Media App

I want to create the next Facebook, Twitter and Instagram. I need your help! 

We want to make a social media application that allows people to post their statuses and add other people as their friends.

We would like people to view their friends posts in their homepage as well as their own. It would also be nice to allow users to have their own profile and see all of their posts.

It would be great when you add a friend, a modal pops up with "You added {name}"!

Adding login and sign up functionality would be great! That means a login/sign up page.

A user should have an email, password and ID.

A post should have user id belonging to the user who created it and a description.

Additional featurs I like would be: 

A user would be able to unfriend a friend.

A post can have likes and dislikes!

```

### Figma design link:
  - https://www.figma.com/file/PMxjIII4uKkPEtWJLxmh1n/Untitled?node-id=0%3A1

# MVP Task Breakdown

Create the home page feature.

~~Task 1. Create the project and install necessary frameworks/technologies(Bootstrap)~~

Task 2: Create a navbar with the following navlinks corresponding to the home page shown in the figma design.

Task 3: Create a button that allows you to create a post. When the user clicks the button, show a modal that contains a form. Be able to create a post with that form. The form should only include one field and that is a description. 

Task 4: Each time you post something, you should see it in your homepage shown in the design.

# Features Task Breakdown

## Create a Suggested Friends page Feature

Task 5. Show all available friends in this page.

## Create a profile page Feature

Task 6. Show the user's image, bio and email in the profile page.

Task 7. Show all posts by the user

Task 8. In the suggested friends page, click a use image, redirect to user's profile.

Task 9. Click on my profile image in the navbar and redirect to my profile page.

## Create a GetFriended Page Feature

Task 10. Create a GetFriended Page similiar to the design


## Create a Sign up Page Feature

Task 11. Allow the user to sign up(Use firebase to do this)

Task 12. Once the user signs up, redirect him to the login page.

## Create a login Page Feature

Task 13. Allow the user to login. 

Task 14. Redirect the user once he's logged in.

Task 15. Make sure the user cannot access any paths without being logged in such as suggested friends, user profiles, homepage.




---
## To Do (updated 12/2)
- Set up routes, get the navbar working
- auth component with a signup/sign in form linked to Firebase authentication
- Suggested Friends feature ~~(homepage, probably?)~~ created a Suggested Friends component
  - use randomly generated fake users from [this API](https://randomuser.me/)


## Done (updated 12/2)
- display posts on the homepage
 - use dummy posts and users for now
- generate pop-up modal on click of the Create Post button on homepage
- start on a profile page component
---




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
