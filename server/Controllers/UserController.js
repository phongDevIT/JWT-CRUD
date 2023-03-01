const jwt = require("jsonwebtoken");
const userModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");

const getListUser = async (req, res) => {
    try {
        // * verifile token
        const users = await userModel.find();
        return res.status(200).send(users);
    } catch (error) {
        console.log(error);
    }
};
const postUser = async (req, res) => {
    try {
        // * verifile token
        // save data vao collection
        const { username, password, email, role } = req.body;
        userModel.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
            email: email,
            role: role,
        });
        return res.status(200).send("create user success");
    } catch (error) {
        // error
    }
};
const deleteUser = async (req, res) => {
    try {
        // delete user
        const userId = req.params.userId;

        await userModel.findByIdAndRemove(userId);
        return res.status(200).send("delete user success");
    } catch (error) {
        // error
    }
};
module.exports = {
    getListUser: getListUser,
    postUser: postUser,
    deleteUser: deleteUser,
};
