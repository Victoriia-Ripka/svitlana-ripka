const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
  title: String,
  content: String,
});

const Article = model('Article', articleSchema);

module.exports = Article;
