const myFriends = require('../Model/friendsDS');

const getHome = (req,res) => {
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

}

const getAllFriends = (req,res) =>{
  return res.status(200).json({
    data:myFriends,
    message:"this's my friend's data"
  });
}

const getSingleFriend = (req,res) => {
  const friendId = Number(req.params.friendId);

  if(myFriends[friendId]){
    return res.status(200).json(myFriends[friendId]);

  }else{

    return res.status(404).json({
      'Error':"this friend dosen't exist"
    });
  }
}

const addNewFirend = (req,res) =>{
  if(!req.body.name){
    return res.status(400).json({
      'Error': 'name is required!'
    });
  }

  let myNewFriend = {
    id: myFriends.length,
    name : req.body.name
  }

  myFriends.push(myNewFriend);

  return res.status(201).json({
    "message":"your new freind added successfully"
  });
}

module.exports = {
  getHome,
  getAllFriends,
  getSingleFriend,
  addNewFirend
}
