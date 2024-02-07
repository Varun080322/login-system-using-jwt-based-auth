const express = require('express');
const app = express();
require("dotenv").config()
const path = require("path");
const db = require("./models/db");
const userRoute = require("./router/userAuthRouters")
const homeRoute = require("./router/homeRouter");
const profileRoute = require("./router/profileRouter");
const errorRoute = require("./router/errorRouter")
const cookieParser = require("cookie-parser");
const errorHandler = require('./middleware/errorHandler');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views","./views");
app.use(cookieParser())

app.use("/",homeRoute)
app.use("/",userRoute)
app.use("/",profileRoute)
app.use("/",errorRoute)
app.use(errorHandler)


db.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server is started on port 3000");
        console.log("Connected to database");
    })
}).catch((err)=>{
    console.log(err.message);
})