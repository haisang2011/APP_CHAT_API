const Router = require('express').Router();

const {
    signUpController,
    signInController,
} = require('../../controller/user.controller');


Router.route('/sign-up').post(
    signUpController
)

Router.route('/sign-in').post(
    signInController
)

module.exports = Router;