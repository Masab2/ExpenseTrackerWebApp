const { handleRegisterUser, handleLogin } = require("../Controllers/auth_controller");

const router = require("express").Router();

// Register API
router.post("/register", handleRegisterUser);

// Login API
router.post("/login", handleLogin);

module.exports = router;