const { Router } = require('express');
const { horoscopes } = require('../horoscopes-data.js');

module.exports = Router().get('/:sign', (req, res) => {
  let match;
  for (const horoscope of horoscopes) {
    if (horoscope.name === req.params.name) {
      match = horoscope;
    }
  }
  return res.json(match);
});
