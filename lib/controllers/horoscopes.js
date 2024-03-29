const { Router } = require('express');
const { horoscopes } = require('../horoscopes-data.js');

module.exports = Router().get('/:sign', (req, res) => {
  let match;
  for (const horoscope of horoscopes) {
    if (horoscope.sign === req.params.sign) {
      match = horoscope;
    }
  }
  res.json(match);
});
