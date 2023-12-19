const UserController = require("../controller/auth_controller.js");
const route = require("express").Router();

route.post("/signup/:role", UserController.signup);
route.post("/signin/:role", UserController.signin);
route.post("/logout", UserController.logout);
route.post("/signupgoogle/:role", UserController.signing);

module.exports = route;
