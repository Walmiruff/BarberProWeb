// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stripeKey: 'pk_test_E5N3vaoJGxK2OV9zKl2ST26H',
  API: 'http://localhost:3000/',

  //  AIzaSyACaAqb5pMAj8oqa9tfWSzPVe66oj-8nQk

  firebase: {
    apiKey: 'AIzaSyC0WzoeylMBXxO4UEjXzHN2ncFydq8rSH0',
    authDomain: 'projetobarbershop-1620.firebaseapp.com',
    databaseURL: 'https://projetobarbershop-1620.firebaseio.com',
    projectId: 'projetobarbershop-1620',
    storageBucket: 'projetobarbershop-1620.appspot.com',
    messagingSenderId: '1004432841462'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.