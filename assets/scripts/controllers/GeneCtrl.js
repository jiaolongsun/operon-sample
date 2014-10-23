app.controller('GeneCtrl', function($scope, $sce, $document, $routeParams, GeneService, LinkService) {
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
    var ifr;
    ifr = $document.find('iframe');
    $scope.browse = !$scope.browse;
    $scope.subview = !$scope.subview;
    ifr.attr('src', ifr.attr('src'));
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
