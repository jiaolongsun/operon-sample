app.filter 'titlize', ()->
  (input)->
    (word[0].toUpperCase() + word[1..-1].toLowerCase() for word in input.split '-').join ' '