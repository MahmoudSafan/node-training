const Router = require('express').Router();
const myFriendsCtrl = require('../Conttroler/friends.ctrl');


Router.get('/', myFriendsCtrl.getHome);

Router.get('/friends', myFriendsCtrl.getAllFriends);

Router.get('/friends/:friendId', myFriendsCtrl.getSingleFriend);

Router.post('/add-new-friend', myFriendsCtrl.addNewFirend);

module.exports = Router
