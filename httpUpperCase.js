var http = require('http');

var server = http.createServer().listen(process.argv[2]);

server.on('request', function(req,res){
  if(req.method !== 'POST'){
    return res.end('only post requests accepted!');
  } else {
    var str = '';
    req.on('data', function(chunk){
      str += chunk;
    })
    .on('end', function(){
      res.end(str.toString().toUpperCase());
    })

    // req.pipe(map(function (chunk) {
    //     return chunk.toString().toUpperCase()
    //   })).pipe(res)

  }

})
