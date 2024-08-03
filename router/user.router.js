var express = require('express')
var router = express.Router()
var controller = require('../controller/user.controller.js')
var middleware = require('../middleware/user.middleware.js')

router.get('/login',controller.loginPage)
router.get('/home', controller.Home)
router.get('/register',controller.registerPage)
router.get('/shop',controller.shopPage)
router.get('/blog',controller.blogPage)
router.get('/blog-detail',controller.blogdetailPage)
router.get('/about',controller.aboutPage)
router.get('/contact',controller.contactPage)
router.get('/checkout',controller.checkoutPage)
router.get('/cart',controller.cart)
router.get('/cart/:id',controller.cartPage)



router.post('/register', controller.register)
router.post('/login',controller.login)

// router.post("/updateData/:id",controller.updateData)
// router.get('/syllabus',controller.syllabus)
// router.get('/update/:id',controller.updatepage)

router.get('/logout',middleware,(req,res) =>{
    res.clearCookie("token")
    res.redirect('/student/login')
})

module.exports = router