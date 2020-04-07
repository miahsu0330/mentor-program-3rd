// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';
const args = process.argv;

const action = args[2];
const params = args[3];


function listBook() {
  request(
    `${API_ENDPOINT}/books`,
    (error, response, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}


function readBook(id) {
  request(
    `${API_ENDPOINT}/books/${id}`,
    (error, response, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}

switch (action) {
  case 'list':
    listBook();
    break;
  case 'read':
    readBook(params);
    break;
  default:
    console.log('Available commands : list read');
}
