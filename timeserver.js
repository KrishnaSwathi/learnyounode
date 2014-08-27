var net = require('net');
var port = process.argv[2];
var server = net.createServer();

server.listen(port, '127.0.0.1');
// console.log('Server listening on ' + server.address() )// +':'+ server.address().port);

function leadZero(num){
  return num<10 ? '0'+num : num;
}

// return date in format: "YYYY-MM-DD hh:mm"
function printDate() {
  var d = new Date();
  var date = d.getFullYear()+'-'+leadZero(d.getMonth()+1)
  +'-'+d.getDate()+' '+d.getHours()+':'+leadZero(d.getMinutes());
  return date;
}
// console.log(printDate());

server.on('connection', function(socket){
    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
    socket.end(printDate());
    // socket.end('\nBye!\n')
});