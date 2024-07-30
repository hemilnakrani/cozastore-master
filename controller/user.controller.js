var jwt = require('jsonwebtoken')
const { model } = require('mongoose')

module.exports = {
    loginPage: (req,res) =>{
        res.render('login')
    },
    login: async(req,res) =>{ 
        var {email,password} = req.body
        var check = await admin.findOne({email})
        if(check){
            if(password == check.password){
                var token = jwt.sign({id : check.id},"developer")
                res.cookie("token",token)
                res.redirect('/admin')
            }else{
                res.redirect('back')
            }
        }
        else{
            res.redirect('back')
        }
    },
}