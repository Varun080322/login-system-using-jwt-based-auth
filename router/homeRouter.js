const express = require("express");
const router = express.Router();
const {home} = require("../controllers/homeController.js");
const Authenticate = require("../middleware/auth.js");


router.get("/",Authenticate,home)


module.exports = router