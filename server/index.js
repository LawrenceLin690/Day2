const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', require('./api'));

//for invalid static files
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});
module.exports = app;
