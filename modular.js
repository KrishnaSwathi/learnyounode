var filterFunction = require('./filterFiles.js');
var dir = process.argv[2];
var fileExt = process.argv[3];

filterFunction(dir, fileExt, function(err, list){

  if(err){
   return  console.log('getting error in filtering files', err);
  }
  list.forEach(function(listFile){
    console.log(listFile);
  })

})
