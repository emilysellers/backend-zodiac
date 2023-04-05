const { Router } = require('express');
const { zodiacs } = require('../zodiacs-data.js');

module.exports = Router()
  .get('/:id', (req, res) => {
    let match;
    for (const zodiac of zodiacs) {
      if (zodiac.id === req.params.id) {
        match = zodiac;
      }
    }
    res.json(match);
  })

  .get('/', (req, res) => {
    const filteredZodiac = [];
    for (const zodiac of zodiacs) {
      filteredZodiac.push({ id: zodiac.id, name: zodiac.name });
    }
    res.json(filteredZodiac);
  });
