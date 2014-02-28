app.controller('GeneCtrl', function($scope, $routeParams, GeneService, LinkService) {
  $scope.title = $routeParams.slug;
  $scope.path = LinkService.linkify($routeParams.slug);
  GeneService.genes($routeParams.slug).then(function(data) {
    return $scope.data = data;
  });
  $scope.browse = false;
  $scope.showBrowse = function() {
    return $scope.browse = !$scope.browse;
  };
});
