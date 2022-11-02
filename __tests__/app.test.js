const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../lib/zodiacs-data');
// const { horoscopes } = require('../lib/horoscopes-data.js');

describe('zodiacs routes', () => {
  it('/zodiacs should return a list of zodiac', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiacs/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiacs/11');
    const taurus = {
      id: '11',
      name: 'taurus',
      dates: 'Apr 20 - May 20',
      symbol: 'Bull',
    };
    expect(res.body).toEqual(taurus);
  });
});

describe('horoscopes routes', () => {
  it('/horoscopes/:sign should return horoscope detail', async () => {
    const res = await request(app).get('/horoscopes/aries');
    const aries = {
      sign: 'aries',
      horoscope: 'aries horoscope',
    };
    expect(res.body).toEqual(aries);
  });
});
