var cmdUrl = process.argv[2];

var http = require('http');

http.get(cmdUrl, function(res){
	var dataPrint;
  res.setEncoding('utf8');
	res.on('data', function(chunk){
  	dataPrint = chunk.toString();
	});
	res.on('end', function(){
    console.log(dataPrint.length);
  	console.log(dataPrint);
	});
	res.on('error',console.error);
});
