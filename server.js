var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end();
});

server.listen(80);
console.log('Server is listening');