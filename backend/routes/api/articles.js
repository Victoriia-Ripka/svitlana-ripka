const express = require('express');
const articles = require('../../controllers/articles');

const router = express.Router();

router.get('/', articles.getAllArticles);

router.get('/:id', articles.getArticle);

module.exports = router;
