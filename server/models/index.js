var db = require('../db/index.js');



module.exports = {
  
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM Message', function(err, results) {
        if (err) {
          throw err;
        }
        callback(err, results);
      });
    }, // a function which produces all the messages

    post: function(parameters, callback) {
      // insert new message into message table based on parameters
      // a function which can be used to insert a message into the database
      var queryString = "INSERT INTO Message (author, text, room) VALUES (?, ?, ?)";

      db.query(queryString, parameters, function(err, results) { 
        if (err) {
          throw err;
        }
        callback(err, results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // Retrieve username from database
      var queryString = 'SELECT * FROM Users';

      db.query(queryString, function(err, results) {
        callback(err, results);
      });
    },

    post: function (nameofuser, callback) {
      var queryString = "INSERT INTO Users (username) VALUES (?)";
      var queryArgs = [nameofuser];

      db.query(queryString, queryArgs, function(err, results) { 
        if (err) {
          throw err;
        }
        callback(err, results);
      });
    }
 }
}

