const jwt = require("jsonwebtoken")




const Authenticate = (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        req.isloggedIn = false
        next()
    }
    jwt.verify(token,"You can't see me",(err,user)=>{
        if (err) {
            req.errorMsg = err
            req.isloggedIn = false
            next()          
        }
        else{
            req.user = user
            req.isloggedIn = true
            next()
        }
    })
}


module.exports = Authenticate;
