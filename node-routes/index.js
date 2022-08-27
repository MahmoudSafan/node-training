
const friends = [
  {
    id: 0,
    name: "Mohmamed"
  },
  {
    id: 1,
    name:"Moamen"
  },
  {
    id: 2,
    name : "3bkrino"
  }
];

const http = require('http');
const server = http.createServer();

server.on("request", (req,res) =>{
  const url = req.url.split('/');

  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello');
  console.log(url);
  if((url[1] === '' || url[1] === 'home') && req.method == 'GET'){
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
    
  }else if(url[1] === 'friends' && req.method == 'GET'){
    console.log("hello from //friends");
    res.writeHead(200,{
      'Content-Type': 'application/json'
    });

    if(url.length === 3 && Number(url[2]) <= friends.length -1  ){
      res.end(JSON.stringify(friends[Number(url[2])]))
    }
    
    else if(url.length === 3  && Number(url[2]) > friends.length -1){
      res.writeHead(404,{
        'Content-Type': 'text/html'
      });
    
       res.write(
        `
          <html>
            <head>
              <title>404 page</title>
            </head>
            <body>
              <h1>friend Not Found!</h1>
            </body>
          </html>
        `
       );
       res.end();
    

    }else{
      res.end(JSON.stringify(friends))
    }

  }
  
  else{
    res.writeHead(404,{
      'Content-Type': 'text/html'
    });
  
     res.write(
      `
        <html>
          <head>
            <title>404 page</title>
          </head>
          <body>
            <h1>404 Not Founded!</h1>
          </body>
        </html>
      `
     );
     res.end();
  }
});

server.listen(3000, '127.0.0.1', ()=>{
  console.log("server is running...");
});

