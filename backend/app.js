const express = require('express');
const moment = require('moment');
const fs = require('fs/promises');
const cors = require('cors');
const articlesRouter = require('./routes/api/articles');

const app = express();

app.use(cors());

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format('DD-MM-YYYY_hh:mm:ss');
  await fs.appendFile('./public/server.log', `${method} ${url} ${date}\n`);
  next();
});

app.use('/api/articles', articlesRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

module.exports = app;
