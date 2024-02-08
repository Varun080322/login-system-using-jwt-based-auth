const errorPage = (req,res)=>{
    if (req.errorMsg){
        res.render("Error");
    }
    res.redirect("/")
}
module.exports = {errorPage}