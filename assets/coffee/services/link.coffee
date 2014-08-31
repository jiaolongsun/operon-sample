app.factory 'LinkService', ()->
  base = 'http://sysbio.informatics.iupui.edu/operomeDB/jbrowse/index.html?data=sample_data/json/'
  query = '&nav=0&tracks=DNA%2CGene%2COperon&highlight='
		linkify: (slug)->
		  base + slug + query