const request = require('request');
const cheerio = require('cheerio');



const scraper = url => {
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error)
                reject(error)
            const $ = cheerio.load(body);
            const articles = $('.item')
           
            const data = articles.map((i, article) => {
                return {
                    url:'http://www.kpbs.org'+ $(article).find('a').attr('href'),
                    headline: $(article).find('h3').text(),
                    summary: $(article).find('p').text()
                }

                // console.log($(article).find('a').attr('href'));
                // console.log($(article).find('h3').text());
                // console.log($(article).find('p').text());

            })
            
            resolve(data.toArray())


        })
    })

}



module.exports = scraper;