# Angular2 Redux Example 
A simple todo list example written in typescript that shows state handling with redux and immutablejs in angular2 applications. To simulate a more complex application, the redux integration and all components are placed inside a feature module called 'todos'.

## Setup
```
git clone git@github.com:Indoqa/angular2-redux-example.git
cd angular2-redux-example
yarn install
```

## Usage
Start dev environment and open http://localhost:4200
```
npm start
```

## Docs

  * Created with [Angular2 CLI](https://angular.io/docs/ts/latest/cli-quickstart.html)
  * Uses [@angular-redux/store](https://github.com/angular-redux/store) to setup redux [here](src/app/todos/todos.module.ts)
  * Uses [immutablejs](https://facebook.github.io/immutable-js/) to store state in [reducers](src/app/todos/reducers/todo.reducer.ts)

### Further reading
  * [Angular 2 Application Architecture - Building Flux Apps with Redux and Immutable.js](http://blog.angular-university.io/angular-2-application-architecture-building-flux-like-apps-using-redux-and-immutable-js-js/)
  * [Angular 2  - Introduction to Redux](https://medium.com/google-developer-experts/angular-2-introduction-to-redux-1cf18af27e6e)
  * [Build a Better Angular 2 Application with Redux and ngrx](http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/)
  * [Using Redux with Angular - JS Toronto Meetup 2016-07-12](https://www.youtube.com/watch?v=s4xr2avwv3s)
  * [Angular and Redux from Rangle.io](http://ngcourse.rangle.io/handout/redux/)
  * [Getting started with Redux](https://egghead.io/courses/getting-started-with-redux)
  * [Awesome Redux: Community Resources](https://github.com/xgrommx/awesome-redux)

