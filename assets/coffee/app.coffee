app = angular.module 'app', ['ngRoute', 'ngAnimate']

app.config ($compileProvider)->
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|blob):/)
  return

app.config ($routeProvider)->

  $routeProvider.when '/', {
    templateUrl: '/templates/home.html',
    controller: 'HomeCtrl'
  }

  $routeProvider.when '/gene/:slug', {
    templateUrl: '/templates/gene.html'
    controller: 'GeneCtrl'
  }

  $routeProvider.when '/tutorial', {
    templateUrl: '/templates/tutorial.html'
  }

  $routeProvider.when '/contact', {
    templateUrl: '/templates/contact.html'
  }

  $routeProvider.otherwise {
    redirectTo: '/'
  }
  return

