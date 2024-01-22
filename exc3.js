const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    
     const html = '<html><body><h1>Hello, World!</h1></body></html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url === '/bao') {
     const jsonData = { message: 'Hello, bao!' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonData));
  } else {
    const notFoundHtml = '<html><body><h1>404 Not Found</h1></body></html>';
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(notFoundHtml);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
