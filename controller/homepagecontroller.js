const homeView = (req, res)=>{
    res.render('home', {

    })
}

const aboutView = (req, res)=>{
    res.render('about', {

    })
}

const stakeholderView = (req, res)=>{
    res.render('stakeholders', {

    })
}

module.exports = {
    homeView,
    aboutView,
    stakeholderView
}



