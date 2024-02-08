const home = (req,res)=>{
    if (!req.isloggedIn){
        return res.render("home");
    }
    res.redirect("/profile")
}

module.exports = {home}