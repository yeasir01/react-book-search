const API_KEY = process.env.GOOGLE_API_KEY;
const axios = require('axios');
const db = require('../models');

module.exports = {
    findBooks: function(req, res){
        const query = req.query.search;
        const parsedQuery = query.trim().split(' ').join('+');
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${parsedQuery}&key=${API_KEY}`)
        .then(results => res.json(results.data))
        .catch(err => res.json(err))
    },
    saveBook: function(req, res){
        db.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    },
    removeBook: function(req, res) {
        db.findById({ _id: req.params.id })
          .then(record => record.remove())
          .then(response => res.json(response))
          .catch(err => res.status(422).json(err));
    },
    getAllSaved: function(req, res){
        db.find()
        .sort({title: 1})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }
}