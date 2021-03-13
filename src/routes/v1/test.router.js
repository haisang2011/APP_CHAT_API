const Router = require('express').Router();

const {
    testController
} = require('../../controller/test.controller');


Router.route('/').get(
    testController
)

module.exports = Router;