
const friends = [
  {
    id: 1,
    name: "Mohmamed"
  },
  {
    id: 2,
    name:"Moamen"
  },
  {
    id: 3,
    name : "3bkrino"
  }
];

const http = require('http');
const server = http.createServer();

server.on("request", (req,res) =>{
  console.log(req.url);

  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello');
  res.writeHead(200,{
    'Content-Type': 'text/html'
  });

   res.write(
    `
      <html>
        <head>
          <title>first page</title>
        </head>
        <body>
          <h1>Hello My Friend</h1>
        </body>
      </html>
    `
   );
   res.end();
});

 

server.listen(3000, '127.0.0.1', ()=>{
  console.log("server is running...");
});
