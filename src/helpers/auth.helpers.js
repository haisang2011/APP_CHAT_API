const jwt = require('jsonwebtoken');

module.exports.generator = async (payload, ACCESS_TOKEN_KEY, ACCESS_TOKEN_LIFETIME) => {
    try {
        
        const accessToken = await jwt.sign(payload, ACCESS_TOKEN_KEY, { expiresIn: ACCESS_TOKEN_LIFETIME });

        return [accessToken];

    } catch (error) {
        throw new Error(error);
    }
}