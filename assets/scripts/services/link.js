app.factory('LinkService', function() {
  var base, query;
  base = '/jbrowse/index.html?data=sample_data/json/';
  query = '&nav=0&tracks=DNA%2CGene%2COperon&highlight=';
  return {
    linkify: function(slug) {
      return base + slug + query;
    }
  };
});
