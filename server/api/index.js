const router = require('express').Router();
const weather = require('openweather-apis');

if (process.env.NODE_ENV !== 'production') require('../../secret');

const weatherKey = process.env.KEY;
weather.setAPPID(weatherKey);
weather.setLang('en');
weather.setUnits('imperial');

router.get('/:zipcode', async (req, res, next) => {
  try {
    let zipcode = req.params.zipcode;
    weather.setZipCode(zipcode);
    weather.getAllWeather(function(err, JSONObj) {
      if (err) console.log(err);
      res.json(JSONObj);
    });
  } catch (error) {
    next(error);
  }
});

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
