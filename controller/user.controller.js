var jwt = require('jsonwebtoken')
const { model } = require('mongoose')
const user = require('../model/user.model')
const product = require('../model/product.model')

module.exports = {
    Home: (req, res) => {
        res.render('index')
    },
    loginPage: (req, res) => {
        res.render('login')
    },
    login: async (req, res) => {
        var { email, password } = req.body
        var check = await user.findOne({ email })
        if (check) {
            if (password == check.password) {
                var token = jwt.sign({ id: check.id }, "developer")
                res.cookie("token", token)
                res.redirect('/home')
            } else {
                res.redirect('back')
            }
        }
        else {
            res.redirect('back')
        }
    },

    registerPage: (req, res) => {
        res.render('register')
    },
    register: async (req, res) => {
        console.log(req.body);
        var { name, email, password } = req.body
        var data = await user.create({ name, email, password })
        res.redirect("/register")
    },
    shopPage:async (req, res) => {
        var data = await product.find()
        res.render('product',{data:data})
    },
    blogPage: (req, res) => {
        res.render('blog')
    },
    aboutPage: (req, res) => {
        res.render('about')
    },
    contactPage: (req, res) => {
        res.render('contact')
    },
    cartPage:async (req, res) => {
        var data = await product.findById(req.params.id)
        res.render('shoping-cart',{data:data})
    },
    blogdetailPage: (req, res) => {
        res.render('blog-detail')
    },
}