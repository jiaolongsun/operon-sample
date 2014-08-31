var app;

app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|blob):/);
});

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  });
  $routeProvider.when('/gene/:slug', {
    templateUrl: 'templates/gene.html',
    controller: 'GeneCtrl'
  });
  $routeProvider.when('/tutorial', {
    templateUrl: 'templates/tutorial.html'
  });
  $routeProvider.when('/contact', {
    templateUrl: 'templates/contact.html'
  });
  $routeProvider.otherwise({
    redirectTo: '/'
  });
});
