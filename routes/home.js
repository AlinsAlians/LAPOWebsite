const express = require('express')
const router  = express.Router()
const {homeView, aboutView, stakeholderView} = require('../controller/homepagecontroller')



router.get('/',homeView)
router.get('/home',homeView)

router.get('/about',aboutView)

router.get('/stakeholders',stakeholderView)

module.exports = router