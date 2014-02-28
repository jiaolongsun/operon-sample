app.controller('GeneCtrl', function($scope, $routeParams, GeneService) {
  $scope.title = $routeParams.slug;
  GeneService.genes($routeParams.slug).then(function(data) {
    return $scope.data = data;
  });
});
