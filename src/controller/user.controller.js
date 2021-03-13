const httpStatus = require('http-status');
const services = require('../services');

module.exports.signUpController = async (req, res, next) => {
    try {
        const {
            gender, email, password
        } = req.body

        const result = await services.users.register(email, gender, password);

        return res.json({
            message: result
        })

    } catch (error) {
        next(error)
    }
}

module.exports.signInController = async (req, res, next) => {
    try {
        const {
            email, password
        } = req.body

        const result = await services.users.login(email, password);

        if(typeof result == "string"){
            return res.json({
                message: result
            }).end()
        }

        return res.json({
            info: result.info,
            token: result.token
        }).end()

    } catch (error) {
        next(error)
    }
}