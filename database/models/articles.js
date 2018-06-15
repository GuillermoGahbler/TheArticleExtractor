const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
  headline: {
    type: String,
  },
  summary: {
    type: String,
  },
  url: {
    type: String,
  },
  note: {
    type: String
  }
});

articleSchema.statics.createIfNotExist = function (article) {
  return this.findOne(article)
    .exec((err, doc) => {
      if (err) return err;
      if (doc) return null;
      return this.create(article, (err, doc) => {
        if (err) return err;
        doc.save((err) => err)
      })
    })

}


articleSchema.statics.getLatestArticles = function (qty) {
  const articles = this;
  return new Promise((resolve, reject) => {
    articles.find({}).limit(qty)
      .exec((err, docs) => err ? reject(err) : resolve({
        articles: docs
      }))

  })
}



module.exports = articleSchema;