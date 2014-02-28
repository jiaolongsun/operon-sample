app.factory 'GeneService', ($q, $http)->
  {
    genes: (slug)->
      dfd = $q.defer()
      $http.get('files/json/'+slug+'.json').success (data)->
        dfd.resolve data
      .error ()->
        dfd.reject "An error occured loading the data"

      dfd.promise
  }