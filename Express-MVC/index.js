const express = require('express');
const friendsRoutes = require('./routs/friends.routs');
const path = require('path');
const server = express();


const PORT = 3000;
const hostName = '127.0.0.1';

// logging middelware
server.use((req,res, next) =>{

  const reqTime = Date.now();
  next();
  const resTime = Date.now();
  console.log(`${req.method} ${req.url} it takes ${resTime - reqTime} ms`);
});

server.use(express.json());
server.use('/views', express.static(path.join(__dirname, 'public')));

/// http://127.0.0.1:3000/views/assets/img0.jpg  

server.use('/', friendsRoutes);

server.listen(PORT,hostName,() => {
  console.log(`Server is running on http://${hostName}:${PORT}`);
});
