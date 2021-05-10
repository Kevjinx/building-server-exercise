const http = require('http')

http.createServer(function(req, res) {
  switch (req.url) {
    case '/OK':

      res.writeHead(200)
      res.end()
      break;
    case '/Bad-Request':

      res.writeHead(400)
      res.end(); break;
    case '/Not-Found':

      res.writeHead(404)
      res.end(); break;
    case '/Created':

      res.writeHead(201)
      res.end(); break;
    case '/Forbidden':

      res.writeHead(403)
      res.end(); break;
    case '/Found':

      res.writeHead(302)
      res.end(); break;
    case '/Gateway-Timeout':

      res.writeHead(504)
      res.end(); break;
    case '/Internal-Server-Error':

      res.writeHead(500)
      res.end(); break;
    case '/Moved-Permanently':

      res.writeHead(301)
      res.end(); break;
    case '/Unauthorized':

      res.writeHead(401)
      res.end(); break;
    case '/Bonus/Redirect':

      res.writeHead(302, {
        'Location' : 'http://localhost:3000/Forbidden'
      })  //where to redirect
      res.end(); break;
    case '/Bonus/Webpage':
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write('<html><p>ahhh suhhhh</p></html>')
      res.end(); break;
    case '/Bonus/Created':
      res.method === 'POST'
        ? res.writeHead(201)
        : res.writeHead(404)
      res.end();
      break;
  }
}).listen(3000, console.log('server starts on port 3000')
)



// GET /Bad-Request HTTP/1.1
// GET /Created HTTP/1.1
// GET /Forbidden HTTP/1.1
// GET /Found HTTP/1.1
// GET /Gateway-Timeout HTTP/1.1
// GET /Internal-Server-Error HTTP/1.1
// GET /Moved-Permanently HTTP/1.1
// GET /Unauthorized HTTP/1.1
// GET /Bonus/Redirect HTTP/1.1
// GET /Bonus/Webpage HTTP/1.1
// GET /Bonus/Created HTTP/1.1
