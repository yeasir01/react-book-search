const express = require('express');
const router = express.Router();
const controller = require('../controllers/booksController');
const path = require('path');

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

router.route("/books/api")
    .get(controller.findBooks)
    .post(controller.saveBook)

router.route("/books/api/:id")
    .delete(controller.removeBook)

module.exports = router;