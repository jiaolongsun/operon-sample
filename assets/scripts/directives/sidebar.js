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
