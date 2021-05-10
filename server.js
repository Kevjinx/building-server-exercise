const http = require('http')
http.createServer(function(req, res) {
  res.end() // this gen a 200ok
}).listen(3000, console.log('server starts on port 3000')
)
