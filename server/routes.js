const router = require('express').Router();

router.get('/', (req,res)=>{
    res.render('home.handlebars')
})

router.get('/articles', (req,res, next)=>{
    
    // make a request to hacker news
    // then parse the information
    // then store the info to database
    // then display to the info from database to the articles view

    res.render('articles.handlebars', {
        articles: [
            {headline: '1', url:'https://news.ycombinator.com/', summary:"article1"},
            {headline: '2', url:'https://www.google.com/', summary:"article2"},
            {headline: '3', url:'https://www.yahoo.com/', summary:"article3"},
            {headline: '4', url:'https://www.amazon.com/', summary:"article4"},
            {headline: '5', url:'https://www.youtube.com/', summary:"article5"},
                     ]
    })
})



module.exports = router