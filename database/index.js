const mongoose = require('mongoose');
const schemas = require('./models');


const urlBaseName = 'mongodb://localhost:27017';
const dbName = 'grabberDB'
const url = urlBaseName + "/" + dbName;

mongoose.connect(url)

const article = mongoose.model('article', schemas.articleSchema);








module.exports = {
    article: article
}
