const UserModel = require('../models/User');

class UserController {

    async register(req, res) {
        const { username, email, password } = req.body;

        const isUserExists = await UserModel.findOne({ email });
        console.log({ isUserExists });
        if (isUserExists) {
            return res
                .status(409)
                .json({
                    error: 'User already exists',
                })
        }

        // TODO add hash password
        const newUser = new UserModel({ username, email, password });
        await newUser.save();

        return res
            .status(200)
            .json({
                user: newUser,
            });
    }

    async login (req, res) {
        const { username, password } = req.body;

        const user = await UserModel.findOne({ username });
        if (!user) {
            return res
                .status(404)
                .json({
                    error: 'User doesn\'t found',
                });
        }

        // TODO add comparing password
        // TODO add session and token
        return res
            .status(200)
            .json({ user });
    }

    logout() {
        // TODO add logout
    }

}


module.exports = UserController;
