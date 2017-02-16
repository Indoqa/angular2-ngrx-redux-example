# Angular2 Redux Example 
A simple todo list example written in typescript that compares different state handling strategies in angular2:

  * Redux bindings with [@angular-redux/store](https://github.com/angular-redux/store)
  * Redux like [ngrx/store](https://github.com/angular-redux/store) to setup redux [here](src/app/todos/todos.module.ts) based on RxJS 
  * Plain services using observables (without a store)
  
Every strategy is placed in a separate feature module and covers the same functionality. Presentational components and models are shared using a commons module. Only smart components and module definitions vary and should point out the different approaches concerning setup and binding. 
  
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
  * [@angular-redux/store](https://github.com/angular-redux/store) 
  * [ngrx/store](https://github.com/ngrx/store)
  * All stores use [immutablejs](https://facebook.github.io/immutable-js/) data structures.
  * Note: Actions and Reducers in redux and ngrx are exactly the same ;) Data manipulation using immutable is even pretty similar inside the 

### Further reading
  * [Angular 2 Application Architecture - Building Flux Apps with Redux and Immutable.js](http://blog.angular-university.io/angular-2-application-architecture-building-flux-like-apps-using-redux-and-immutable-js-js/)
  * [Angular 2  - Introduction to Redux](https://medium.com/google-developer-experts/angular-2-introduction-to-redux-1cf18af27e6e)
  * [Build a Better Angular 2 Application with Redux and ngrx](http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/)
  * [Using Redux with Angular - JS Toronto Meetup 2016-07-12](https://www.youtube.com/watch?v=s4xr2avwv3s)
  * [Getting started with Redux](https://egghead.io/courses/getting-started-with-redux)
  * [Awesome Redux: Community Resources](https://github.com/xgrommx/awesome-redux)
  * [Angular 2 Service Layers: Redux, RxJs and Ngrx Store - When to Use a Store And Why ?](http://blog.angular-university.io/angular-2-redux-ngrx-rxjs/)
  * [Angular 2 Smart Components vs Presentation Components: What's the Difference, When to Use Each and Why?](http://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/)

