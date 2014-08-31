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
