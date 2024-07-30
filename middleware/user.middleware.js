var jwt = require('jsonwebtoken')
const user = require('../model/user.model.js')

var verifyToken = async(req,res,next) =>{

    if(req.cookies.token){
        var check = jwt.verify(req.cookies.token, "developer")

        if(check){
            var data = await user.findById(check.id)
            if(data){
                req.user = data
                next()
            }
            else{
                res.redirect('/login')
            }
        }
        else{
            res.redirect('/login')
        }
    }
    else{
        res.redirect('/login')
    }
}

module.exports = verifyToken