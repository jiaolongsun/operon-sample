app.controller 'GeneCtrl', ($scope, $routeParams, GeneService, LinkService)->
  $scope.title = $routeParams.slug
  $scope.path = LinkService.linkify($routeParams.slug)

  GeneService.genes($routeParams.slug).then (data)->
    $scope.data = data

  $scope.browse = false

  $scope.showBrowse = ()->
    $scope.browse = !$scope.browse
    # console.log $scope.path

  return