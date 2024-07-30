var jwt = require('jsonwebtoken')
const { model } = require('mongoose')
const user = require('../model/user.model')

module.exports = {
    loginPage: (req, res) => {
        res.render('login')
    },
    login: async(req,res) =>{ 
        var {email,password} = req.body
        var check = await admin.findOne({email})
        if(check){
            if(password == check.password){
                var token = jwt.sign({id : check.id},"developer")
                res.cookie("token",token)
                res.redirect('/home')
            }else{
                res.redirect('back')
            }
        }
        else {
            res.redirect('back')
        }
    },
    Home: (res, req) => {
        res.render('index')
    },
    registerPage: (res, req) => {
        res.render('register')
    },
    register: async (req, res) => {
        console.log(req.body);
        var { name, email, password } = req.body
        var data = await user.create({ name, email, password })
        res.redirect("/register")
    }
}