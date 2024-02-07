const express = require("express");
const router = express.Router();
const {register, login,registerpost,loginpost, logout, logoutpost} = require("../controllers/userAuthController")

router.get("/register",register)
router.get("/login",login)
router.post("/register",registerpost)
router.post("/login",loginpost)
router.get("/logout",logout)

module.exports = router