# Angular2 state handling example 
A simple todo list example that compares the setup and integration of different state handling strategies in angular2:

  * Redux bindings with [@angular-redux/store](https://github.com/angular-redux/store)
  * Redux like [ngrx/store](https://github.com/angular-redux/store) based on RxJS 
  * Plain services using observables (without a store)
  
Every strategy is placed in a separate feature module and covers the same functionality. Presentational components and models are shared using a commons module.
  
## Installation
```
git clone git@github.com:Indoqa/angular2-ngrx-redux-example.git
cd angular2-ngrx-redux-example
yarn install
```

## Usage
Start dev environment and open http://localhost:4200
```
npm start
```

## Docs

  * Created with [Angular2 CLI](https://angular.io/docs/ts/latest/cli-quickstart.html)
  * Redux binding: [@angular-redux/store](https://github.com/angular-redux/store) 
  * Ngrx binding: [ngrx/store](https://github.com/ngrx/store)
  * All stores use [immutablejs](https://facebook.github.io/immutable-js/) data structures.
  
### Notes  
  * Actions and Reducers in redux and ngrx are exactly the same (at least in this small example ;) ).
  * Data manipulation using immutable is identical in all three approaches. 
  * Observables are used to deliver data to smart components in all three strategies. 
  * Templates may bind directly to these observables using `| async`. Change detection may be optimized.
  * Smart components may do more advanced reactive manipulations (filtering, sorting, slicing,..) before passing data down to render.
  * Redux and Ngrx provide the same dev tools (logging, timetravel, state debugging etc.)
  * See articles below for a vast range of meanings, opinions and hints for choosing the right state.
  
### Further reading
  * [Angular 2 Smart Components vs Presentation Components: What's the Difference, When to Use Each and Why?](http://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/)
  * [Angular 2 Service Layers: Redux, RxJs and Ngrx Store - When to Use a Store And Why ?](http://blog.angular-university.io/angular-2-redux-ngrx-rxjs/)
  * [Angular 2 Application Architecture - Building Flux Apps with Redux and Immutable.js](http://blog.angular-university.io/angular-2-application-architecture-building-flux-like-apps-using-redux-and-immutable-js-js/)
  * [Angular 2  - Introduction to Redux](https://medium.com/google-developer-experts/angular-2-introduction-to-redux-1cf18af27e6e)
  * [Build a Better Angular 2 Application with Redux and ngrx](http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/)
  * [Using Redux with Angular - JS Toronto Meetup 2016-07-12](https://www.youtube.com/watch?v=s4xr2avwv3s)
  * [Getting started with Redux](https://egghead.io/courses/getting-started-with-redux)
  * [Awesome Redux: Community Resources](https://github.com/xgrommx/awesome-redux)
  * [ngrx: Comparison to redux](https://github.com/ngrx/store/issues/16)
  * [From Redux to Angular ngrx/store] (https://julienrenaux.fr/2017/02/16/from-redux-to-angular-ngrxstore/)
  * [Angular 2 Service Layers: Redux, RxJs and Ngrx Store - When to Use a Store And Why ?] (https://medium.com/@charlie_gee/redux-vs-rxjs-ngrx-store-db6066058719#.p4l2ss8hi)
  

