const mongoose = require('mongoose');
const models = require('./models');


const urlBaseName = 'mongodb://localhost:27017';
const dbName = 'grabberDB'
const url = urlBaseName + "/" + dbName;

mongoose.connect(url)

const articleSchema = new mongoose.Schema(models.articles);
const article = mongoose.model('article', articleSchema);








module.exports = {
    article: article
}
