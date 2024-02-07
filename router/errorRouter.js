const express = require("express");
const router = express.Router();
const {errorPage} = require("../controllers/errorController.js")

router.get("/error",errorPage)


module.exports = router