const UserModel = require('../model/User');
const bcrypt = require('bcrypt');
const { 
    transError, 
    transMail, 
    transSuccess, 
    transValidation, 
} = require('../../lang/vi');
const { 
    generator, 
} = require('../helpers/auth.helpers');

let saltRounds = 7;

module.exports.register = async (email, gender, password) => {
    try {
        let userByEmail = await UserModel.findOne({ "local.email": email }).exec();
        if(userByEmail){
            if(userByEmail.deleteAt != null){
                return transError.account_removed;
            }

            return transError.account_in_use;
        }

        let salt = bcrypt.genSaltSync(saltRounds);

        let userItem = {
            name: email.split("@")[0],
            gender: gender,
            local: {
                email: email,
                password: bcrypt.hashSync(password, salt),
                verifyToken: "abcxyz"
            }
        }

        let user = await UserModel.create(userItem);

        return transSuccess.userCreated(user.local.email);

    } catch (error) {
        console.log(error);
    }
}

module.exports.login = async (email, password) => {
    try {
        let userByEmail = await UserModel.findOne({ "local.email": email }).exec();
        console.log({userByEmail})
        if(!userByEmail){
            return transError.account_undefined;
        }

        let checkPassword = bcrypt.compareSync(password, userByEmail.local.password);
        console.log({checkPassword})
        if(!checkPassword){
            return transError.login_failed;
        }

        const [accessToken] = await generator({_id: userByEmail._id}, process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_LIFETIME);

        delete userByEmail.local.password;

        return {
            info: userByEmail,
            token: accessToken
        }

    } catch (error) {
        console.log(error);
    }
}