const { handleRegisterUser, handleLogin } = require("../Controllers/auth_controller");

const router = require("express").Router();

// Register API
router.post("/register", handleRegisterUser);


module.exports = router;