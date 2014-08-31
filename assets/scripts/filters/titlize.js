app.filter('titlize', function() {
  return function(input) {
    var word;
    return ((function() {
      var _i, _len, _ref, _results;
      _ref = input.split('-');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        word = _ref[_i];
        _results.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
      }
      return _results;
    })()).join(' ');
  };
});
