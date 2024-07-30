const cookieParser = require('cookie-parser')
var express = require('express')
var app = express()
var path = require('path')


app.use(express.urlencoded())
app.set('view engine',"ejs")
app.set(path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"assets")))

app.use(cookieParser())

require('./db.js')

app.use('/',require('./router/user.router.js'))
//app.use('/admin',require('./router/admin.router.js'))

app.listen(9000, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('Server is running on port 9000')
    }
})
