app.controller 'GeneCtrl', ($scope, $routeParams, GeneService)->
  $scope.title = $routeParams.slug
  GeneService.genes($routeParams.slug).then (data)->
    $scope.data = data
  return