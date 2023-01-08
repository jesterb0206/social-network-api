const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

dotenv.config({ path: './config.env' });
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('DB connection established!');
  });

const port = process.env.PORT || 3000;
DB.once('open', () => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${port}...`);
  });
});
