const express = require("express");
const { model } = require("mongoose");
const authController = require("../Controllers/AuthController");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
