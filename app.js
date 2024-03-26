const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app  = express()


//EJS
app.set('view engine', 'ejs')
app.use(expressLayouts)

//Serving Static Files
app.use('/static', express.static('public'))

//Routes
const home = require('./routes/home')
app.use('/', home)
app.use('/home', home)

//Server Listening Port
const port  = 2300
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
