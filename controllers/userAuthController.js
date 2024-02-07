const UserAuthDetails = require("../models/users")
const bcrypt = require("bcrypt");
const { render } = require("ejs");
const passcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const jwt = require("jsonwebtoken")

const register = (req,res)=>{
    if(!req.loggedin){
        res.render("register",{pass:"",emailmsg:""});
    }
    else
    {
        res.redirect("/profile")
    }
}
const login = (req,res)=>{
    if(!req.loggedin){
        res.render("login",{
            errMsg:""
        });
    }
    else{
        res.redirect("/profile")
    }
}
const registerpost = async (req,res)=>{
    const {username, email, password} = req.body
    if(await UserAuthDetails.findOne({email})){
        res.render("register",{pass:"",emailmsg:"User alredy Exist"})
    }
    else{
        if(!(passcheck.test(password))){
            res.render("register",{pass:"Password must be Strong",emailmsg:""})
        }
        else{
            const hashedpass =  await bcrypt.hash(password,10)
            const user = await UserAuthDetails.create({
                username,
                email,
                password : hashedpass
            })
            const token = jwt.sign({_id:user._id,username:user.username,email:user.email,time:user.createdAt},"You can't see me");
            await res.cookie("token",token,{
                secure : true,
                expiresIn: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
            })
            return res.redirect("/profile")
        }
    }
}
const loginpost = async (req,res)=>{
    const {email,password} = req.body 
    const userdata = await UserAuthDetails.findOne({email})
    if(!userdata){
        return res.render("login",{errMsg:"Incorrect email or password"})
    }
    else {
        const isMatch = await bcrypt.compare(password,userdata.password)
        if(!isMatch){
            return res.render("login",{errMsg:"Incorrect email or password"})
        }
        else{
            const token = jwt.sign({_id:userdata._id,username:userdata.username,email:userdata.email,time:userdata.createdAt},"You can't see me");
            await res.cookie("token",token,{
                secure : true,
                expiresIn: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
            })
            return res.redirect("/profile")
        }
    }
}
const logout = async (req,res)=>{
    const token = req.cookies.token
    await res.clearCookie("token")
    res.render("logout")
}

module.exports = {register,login,registerpost,loginpost,logout}