var http = require('http');
var url = require('url');
var queryString = require('querystring');

var server = http.createServer().listen(process.argv[2]);

server.on('request', function(req,res){

  if(req.url.indexOf('/api/parsetime') > -1){

    var query = queryString.parse(url.parse(req.url).query);
    var time = new Date(query.iso);

    var displayTime = {
      "hour":time.getHours(),
      "minute":time.getMinutes(),
      "second": time.getSeconds()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(displayTime));
  }

  if(req.url.indexOf('/api/unixtime') > -1){

    var query = queryString.parse(url.parse(req.url).query);
    var time = new Date(query.iso);

    var displayTime = {
      "unixtime" : time.getTime()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(displayTime));
  }

})


