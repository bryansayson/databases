var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

//router.route("/classes/messages").get(controllers["messages"].get).post(controllers["messages"].post);
//router.route("/classes/users").get(controllers["users"].get).post(controllers["users"].post);
module.exports = router;
