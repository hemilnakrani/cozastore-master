var jwt = require('jsonwebtoken')
const { model } = require('mongoose')
const user = require('../model/user.model')

module.exports = {
    Home: (req,res) => {
        res.render('index')
    },
    loginPage: (req, res) => {
        res.render('login')
    },
    login: async(req,res) =>{ 
        var {email,password} = req.body
        var check = await user.findOne({email})
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
   
    registerPage: (req,res) => {
        res.render('register')
    },
    register: async (req, res) => {
        console.log(req.body);
        var { name, email, password } = req.body
        var data = await user.create({ name, email, password })
        res.redirect("/register")
    }
}