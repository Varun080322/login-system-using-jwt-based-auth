const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode: 500;
    switch(statusCode){
        case 400:
            res.json({
                title:"Bad Request",
                message:err.message
            });
            break;
        case 401:
            res.json({
                title:"Unauthorized",
                message:err.message
            });
            break;
        case 404:
            res.json({
                title:"Not found",
                message:err.message
            });
            break;
        case 500:
            res.json({
                title:"Server error",
                message:err.message
            });
            break;
        default:
            break;
    }
}
module.exports = errorHandler;