app.filter 'resource', ($sce)->
  (input)->
    $sce.trustAsResourceUrl(input)