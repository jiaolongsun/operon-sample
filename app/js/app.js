var app;

app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|blob):/);
});

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/templates/home.html',
    controller: 'HomeCtrl'
  });
  $routeProvider.when('/gene/:slug', {
    templateUrl: '/templates/gene.html',
    controller: 'GeneCtrl'
  });
  $routeProvider.otherwise({
    redirectTo: '/'
  });
});

app.filter('titlize', function() {
  return function(input) {
    var word;
    return ((function() {
      var _i, _len, _ref, _results;
      _ref = input.split('-');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        word = _ref[_i];
        _results.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
      }
      return _results;
    })()).join(' ');
  };
});

app.factory('GeneService', function($q, $http) {
  return {
    genes: function(slug) {
      var dfd;
      dfd = $q.defer();
      $http.get('files/json/' + slug + '.json').success(function(data) {
        return dfd.resolve(data);
      }).error(function() {
        return dfd.reject("An error occured loading the data");
      });
      return dfd.promise;
    }
  };
});

app.factory('LinkService', function() {
  var base, query;
  base = '/jbrowse/index.html?data=sample_data/json/';
  query = '&nav=0&tracks=DNA%2CGene%2COperon&highlight=';
  return {
    linkify: function(slug) {
      return base + slug + query;
    }
  };
});

app.controller('GeneCtrl', function($scope, $sce, $routeParams, GeneService, LinkService) {
  $scope.title = $routeParams.slug;
  $scope.path = LinkService.linkify($routeParams.slug);
  $scope.loading = true;
  $scope.subview = true;
  $scope.browse = false;
  $scope.table = false;
  GeneService.genes($routeParams.slug).then(function(data) {
    $scope.loading = false;
    $scope.items = data.table;
    $scope.info = $sce.trustAsHtml(data.content);
    $scope.url = URL.createObjectURL($scope.getBlob($scope.items));
  });
  $scope.showBrowse = function() {
    $scope.browse = !$scope.browse;
    $scope.subview = !$scope.subview;
  };
  $scope.showTable = function() {
    $scope.table = !$scope.table;
    $scope.subview = !$scope.subview;
  };
  $scope.getBlob = function(val) {
    var json;
    json = JSON.stringify(val);
    return new Blob([json], {
      type: "application/json"
    });
  };
  $scope.goBack = function() {
    $scope.subview = true;
    $scope.browse = false;
    $scope.table = false;
  };
});

app.controller('HomeCtrl', function($scope, $http) {
  return $scope.message = 'Welcome';
});

app.directive('sidebar', function($http, $route, $location) {
  return {
    restrict: 'C',
    transclude: true,
    templateUrl: 'templates/sidebar.html',
    link: function(scope, elem, attrs) {
      $http.get('files/list.json').success(function(data) {
        return scope.genes = data;
      });
    }
  };
});
