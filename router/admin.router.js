var express = require('express')
var router = express.Router()
var controller = require('../controller/admin.controller.js')
var middleware = require('../middleware/admin.middleware.js')

router.get('/login',controller.loginPage)
router.get('/',middleware,controller.dashbordPage)
router.get('/addstudent',middleware,controller.addstudent)
router.get('/allstudent',middleware,controller.allstudent)
router.get('/more/:id',middleware,controller.moreDetails)
router.get('/update/:id',controller.updatepage)
router.get('/delete/:id',controller.deletedata)
router.get('/editstudent/:id',middleware,controller.editStudent)

router.post("/updateData/:id",controller.updateData)
router.post('/addstudent',middleware,controller.addstudentData)
router.post('/login',controller.login)

router.get('/logout',middleware,(req,res) =>{
    res.clearCookie("token")
    res.redirect('/admin/login')
})

module.exports = router