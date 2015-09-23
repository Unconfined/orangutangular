angular.module('orangutangular', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    // .when('/', {
    //   templateUrl: '',
    //   // controller: 'OpeningController'
    // })
    .when('/intro', {
      templateUrl: 'app/views/intro.html',
      // controller: 'IntroController'
    })
    .when('/castle', {
      templateUrl: 'app/views/castle.html',
      // controller: 'IntroController'
    })
    .when('/lair', {
      templateUrl: 'app/views/lair.html',
      // controller: 'IntroController'
    })
    .when('/victory', {
      templateUrl: 'app/views/victory.html',
      // controller: 'IntroController'
    })
    .when('/ending', {
      templateUrl: 'app/views/ending.html',
      // controller: 'IntroController'
    })
    .when('/intro', {
      templateUrl: 'app/views/intro.html',
      // controller: 'IntroController'
    })
    .otherwise({
      redirectTo: '/'
    })
})