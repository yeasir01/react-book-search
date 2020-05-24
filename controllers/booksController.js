const API_KEY = process.env.GOOGLE_API_KEY;
const axios = require('axios');

module.exports = {
    findBooks: function(req, res){
        const book = req.query.search
        console.log(book);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${API_KEY}`)
        .then(results => res.json(results.data))
        .catch(err => res.json(err))
    }
}