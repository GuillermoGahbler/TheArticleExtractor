const router = require('express').Router();
const db = require('../database');
const scraper = require('../scraper');

router.get('/', (req, res) => {
    res.render('home.handlebars')
})


router.get('/articles', (req, res, next) => {
    scraper('http://www.kpbs.org/news/')
        .then(data => {
            db.article.insertMany(data, (err) => {
                if (err) next(err);

                db.article.find({})
                    .exec((err, doc) => {

                        if (err) next(err)
                        res.render('articles.handlebars', {
                            articles: doc
                        });

                    })
            })





        })
        .catch(error => next(error))


})



module.exports = router