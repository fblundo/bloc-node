var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

  fs.writeFile('../simple-http-node-server/hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if (err) throw err;

    console.log('success')
  });

}).listen(8080);
