const express = require('express');
const server = express();
const PORT = 3000;
const hostName = '127.0.0.1';

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

// logging middelware
server.use((req,res, next) =>{
  const reqTime = Date.now();
  next();
  const resTime = Date.now();
  console.log(`${req.method} ${req.url} it takes ${resTime - reqTime} ms`);
});

server.use(express.json());

server.get('/', (req,res) => {
  res.send(
    `
    <html>
      <head>
        <title>Home page</title>
      </head>
      <body>
        <h1>Hello My Friend</h1>
      </body>
    </html>
  `
  );

});

server.get('/friends', (req,res) =>{
  res.status(200).json({
    data:friends,
    message:"this's my friend's data"
  });
});

server.get('/friends/:friendId', (req,res) =>{
  const friendId = Number(req.params.friendId);

  if(friends[friendId]){
    res.status(200).json(friends[friendId]);

  }else{

    res.status(404).json({
      'Error':"this friend dosen't exist"
    });
  }
});

server.listen(PORT,hostName,() => {
  console.log(`Server is running on http://${hostName}:${PORT}`);
});
