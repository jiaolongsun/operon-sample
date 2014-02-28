app = angular.module 'app', ['ngRoute', 'ngAnimate']

app.config ($routeProvider)->

  $routeProvider.when '/', {
    templateUrl: '/templates/home.html',
    controller: 'HomeCtrl'
  }

  $routeProvider.when '/gene/:slug', {
    templateUrl: '/templates/gene.html'
    controller: 'GeneCtrl'
  }

  $routeProvider.otherwise {
    redirectTo: '/'
  }
  return