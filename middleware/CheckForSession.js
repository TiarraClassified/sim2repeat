
module.exports = function (req,res,next){
    if (!req.session.user){
        req.session.user = {
            username : '',
        }

    }
    //sim2: 75E
    next()
}