app.directive 'sidebar', ($http, $route, $location)->
  {
    restrict: 'C'
    transclude: true
    templateUrl: 'templates/sidebar.html'
    link: (scope, elem, attrs)->
      $http.get('files/list.json').success (data)->
        scope.genes = data

      return
  }