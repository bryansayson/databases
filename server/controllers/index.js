var models = require('../models/index.js');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        res.send(results);
      });
      // response comes in
      // models.get(callback)
      // res.data = database query returns
      // respond

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // db.messages.get();
    // feed parameters into models.post()
      var username = req.body.username;
      var message = req.body.text;
      var roomname = req.body.roomname;

      var parameters = [username, message, roomname];
      models.messages.post(parameters, function(err, results) {
        res.send(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      var username = req.body.username;
      
      models.users.get(username, function(err, results) {
        res.send(results);
      });
    },
    post: function (req, res) {
      // Get username from request
      var username = req.body.username;
      //console.log('post is being initialized');

      // call models.post for users on this specific username
      models.users.post(username, function(err, results) {
        res.send('It worked!');
      });
    }
  }
}

