const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../lib/zodiac-data');

// describe('example test - you should probably update me', () => {
//   it('home route should return hello world', async () => {
//     const resp = await request(app).get('/');
//     expect(resp.text).toEqual('hello world!');
//   });
// });
describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiac', async () => {
    const resp = await request(app).get('/zodiac');
    const expected = zodiac.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(resp.body).toEqual(expected);
  });
});
