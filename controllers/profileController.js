const getProfile = (req,res)=>{
    // res.render("profile",{data:req.user})
    res.render("profile",{username:req.user.username,email:req.user.email,time:req.user.time})
}

module.exports = {getProfile}