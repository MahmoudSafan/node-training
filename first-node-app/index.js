const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req,res) => {
  res.end('hello world after saving');
});

server.listen(port, hostname, ()=>{
  console.log(`server is runniong at http://${hostname}:${port}`)
});
