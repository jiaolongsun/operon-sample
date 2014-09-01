app.controller('SidebarCtrl', function($scope, $location) {
  $scope.genes = [
    {
      "name": "Clostridium Beijerincki 2243",
      "slug": "clostridium-beijerincki-2243"
    }, {
      "name": "Clostridium Difficile 630",
      "slug": "clostridium-difficile-630"
    }, {
      "name": "Campylobacter Jejuni RM1221",
      "slug": "campylobacter-jejuni-rm1221"
    }, {
      "name": "Escherichia Coli K12 MG1655",
      "slug": "escherichia-coli-k12-mg1655"
    }, {
      "name": "Eggerthella Lenta DSM2243",
      "slug": "eggerthella-lenta-dsm2243"
    }, {
      "name": "Mycobacterium tuberculosis H37Rv",
      "slug": "mycobacterium-tuberculosis-h37rv"
    }, {
      "name": "Salmonella enterica subsp. enterica serovar Typhimurium str. 14028S",
      "slug": "salmonella-enterica-subsp"
    }, {
      "name": "Sinorhizobium Meliloti 2011",
      "slug": "sinorhizobium-meliloti-2011"
    }, {
      "name": "Synechoccus Elongatus PCC7942",
      "slug": "synechoccus-elongatus-pcc7942"
    }
  ];
  $scope.locate = function(path) {
    $location.path('/gene/' + path);
  };
});
