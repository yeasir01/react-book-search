const express = require('express');
const router = express.Router();
const controller = require('../controllers/booksController')

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

router.route("/api")
    .get(controller.findBooks)

module.exports = router;