app.controller 'GeneCtrl', ($scope, $sce, $routeParams, GeneService, LinkService)->

  $scope.title = $routeParams.slug
  $scope.path = LinkService.linkify($routeParams.slug)
  $scope.loading = true
  $scope.subview = true
  $scope.browse = false
  $scope.table = false

  GeneService.genes($routeParams.slug).then (data)->
    $scope.loading = false
    $scope.items = data.table
    $scope.info = $sce.trustAsHtml(data.content)
    $scope.url = URL.createObjectURL($scope.getBlob($scope.items))
    return

  $scope.showBrowse = ()->
    $scope.browse = !$scope.browse
    $scope.subview = !$scope.subview
    return
    

  $scope.showTable = ()->
    $scope.table = !$scope.table
    $scope.subview = !$scope.subview
    return


  $scope.getBlob = (val)->
    json = JSON.stringify(val)
    return new Blob([json], {type: "application/json"})

  $scope.goBack = ()->
    $scope.subview = true
    $scope.browse = false
    $scope.table = false
    return
  return
