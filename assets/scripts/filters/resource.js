app.filter('resource', function($sce) {
  return function(input) {
    return $sce.trustAsResourceUrl(input);
  };
});
