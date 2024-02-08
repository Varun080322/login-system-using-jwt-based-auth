const getProfile = (req,res)=>{
    if(req.errorMsg){
        return res.redirect("/error")
    }
    if (req.isloggedIn){
        return res.render("profile",{username:req.user.username,email:req.user.email,time:req.user.time})
    }
    else{
        return res.redirect("/")
    }

}

module.exports = {getProfile}