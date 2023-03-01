const userModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        await userModel.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
            // password: password,
            email: email,
            role: "regular",
        });
        // console.log("register post from client");
        return res.status(200).send("register user");
    } catch (error) {
        console.log("error", error);
    }
};

const login = async (req, res) => {
    // check email , password
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send("Invalid email and password");
    }
    // check password
    const isPassvalid = bcrypt.compareSync(req.body.password, user.password);
    if (!isPassvalid) {
        return res.status(400).send("Invalid email and password");
    }
    const jwtToken = jwt.sign(
        {
            _id: user.id,
            username: user.username,
            role: user.role,
        },
        process.env.SECRET_JWT,
        { expiresIn: 3600 }
    );
    return res.status(200).send({
        accessToken: jwtToken,
    });
};

module.exports = {
    register: register,
    login: login,
};
