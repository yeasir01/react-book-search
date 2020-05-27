const API_KEY = process.env.GOOGLE_API_KEY;
const axios = require('axios');

module.exports = {
    findBooks: function(req, res){
        const book = req.query.search;
        const parsedQuery = book.trim().split(' ').join('+');
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${parsedQuery}&key=${API_KEY}`)
        .then(results => res.json(results.data))
        .catch(err => res.json(err))
    }
}