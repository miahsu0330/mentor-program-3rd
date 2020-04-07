/* eslint-disable import/no-extraneous-dependencies */
const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    console.log(JSON.parse(body));
  },
);
