const router = require('express').Router();
const db = require('../database');
const scraper = require('../scraper');

router.get('/', (req, res) => {
  res.render('home.handlebars')
})


router.get('/articles', (req, res, next) => {
  scraper('http://www.kpbs.org/news/')
    .then(articles => {
      return articles
        .forEach(article => db.article.createIfNotExist(article));
    })

   .then(()=> {
      return db.article.getLatestArticles(5)
      .then(articles => res.render('articles.handlebars', articles))
    })
    .catch(error => next(error))
})





module.exports = router