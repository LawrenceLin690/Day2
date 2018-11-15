const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});

module.exports = app;
