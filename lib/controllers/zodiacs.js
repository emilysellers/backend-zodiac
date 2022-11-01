const { Router } = require('express');
const { zodiacs } = require('../zodiacs-data.js');

module.exports = Router().get('/', (req, res) => {
  const filteredZodiac = [];
  for (const zodiac of zodiacs) {
    filteredZodiac.push({ id: zodiac.id, name: zodiac.name });
  }
  res.json(filteredZodiac);
});
