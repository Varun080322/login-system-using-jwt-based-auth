const jwt = require("jsonwebtoken")




const Authenticate = (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        req.isloggedIn = false
    }
    jwt.verify(token,"You can't see me",(err,user)=>{
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
          }
        else{
            req.user = user
            next()
        }
    })
}


module.exports = Authenticate;
