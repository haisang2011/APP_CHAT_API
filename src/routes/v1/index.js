const Router = require("express").Router();

const testRouter = require("./test.router");
const userRouter = require("./user.router");

Router.use("/v1/api/test", testRouter);

Router.use("/v1/api/user", userRouter);

module.exports = Router;
