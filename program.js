
var http = require('http');
var results = [];
var count = 0;

var limit = process.argv.length - 2;

for(var i=0; i<limit; i++){
  // console.log(i+' | limit: '+limit);
  getHttp(i);
}

function getHttp(index){

  http.get(process.argv[2 + index], function(res){
    var body ='';
    res.setEncoding('utf8');
    res.on('data', function(chunk){
      body += chunk.toString();
    });
    res.on('end', function(){
      results[index] = body;
      count++;
      if(count === 3) {
        displayResults();
      }
    });

  });
}

function displayResults(){
  // console.log(Object.keys(results));
   for(var i=0; i<limit; i++){
    console.log(results[i]);
   } 
}