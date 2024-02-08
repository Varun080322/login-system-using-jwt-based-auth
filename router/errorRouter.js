const express = require("express");
const router = express.Router();
const {errorPage} = require("../controllers/errorController.js")
const Authenticate = require("../middleware/auth.js");

router.get("/error",Authenticate,errorPage)


module.exports = router