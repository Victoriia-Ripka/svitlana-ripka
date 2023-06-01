const mongoose = require('mongoose');

const app = require('./app');

const DB_HOST =
  'mongodb+srv://viktoriia:LhO3Jcd67WIGsCLT@cluster0.bczkins.mongodb.net/articles_db?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('connected to DB');
    app.listen(8080, () => {
      console.log('Server running. Use our API on port: 8080');
    });
  })
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });
