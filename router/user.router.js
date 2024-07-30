var express = require('express')
var router = express.Router()
var controller = require('../controller/student.controller.js')
var middleware = require('../middleware/student.middleware.js')

router.get('/login',controller.loginPage)
router.get('/',middleware,controller.Home)
// router.get('/syllabus',controller.syllabus)
// router.get('/update/:id',controller.updatepage)
router.get('/register',controller.registerPage)


router.post('/register', controller.register)
// router.post("/updateData/:id",controller.updateData)
router.post('/login',controller.login)


router.get('/logout',middleware,(req,res) =>{
    res.clearCookie("token")
    res.redirect('/student/login')
})

module.exports = router