const express = require("express");
const router = express.Router();
const { authUser, registerUser } = require("../controllers/auth.controller");

router.post("/login", authUser);
router.post("/register", registerUser);

module.exports = router;
