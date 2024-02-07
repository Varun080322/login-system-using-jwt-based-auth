const express = require("express");
const router = express.Router();
const {getProfile} = require("../controllers/profileController");
const Authenticate = require("../middleware/auth");


router.get("/profile",Authenticate,getProfile)

module.exports = router