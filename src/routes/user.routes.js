const UserController = require("../controllers/user.controller");
const BaseRouter = require("./BaseRouter");

const userController = new UserController("/users", "id");
const userRouter = new BaseRouter("/users", ":id", userController);

module.exports = userRouter;
