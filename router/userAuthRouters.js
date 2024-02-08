const express = require("express");
const router = express.Router();
const {register, login,registerpost,loginpost, logout, logoutpost} = require("../controllers/userAuthController");
const Authenticate = require("../middleware/auth");

router.get("/register",Authenticate,register)
router.get("/login",Authenticate,login)
router.post("/register",registerpost)
router.post("/login",loginpost)
router.get("/logout",Authenticate,logout)

module.exports = router