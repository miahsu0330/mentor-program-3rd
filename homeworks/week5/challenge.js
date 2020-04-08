/* eslint-disable import/no-extraneous-dependencies */
const request = require('request');

const arge = process.argv;
const action = arge[2];
const params = arge[3];
const params2 = arge[4];


function creatBook(nameBook, isbn) {
  request.post({
    url: 'https://lidemy-http-challenge.herokuapp.com/api/books',
    form: {
      name: nameBook,
      ISBN: isbn,
    },
  },
  (error, response, body) => {
    console.log(JSON.parse(body));
  });
}


function searchBook(nameBook) {
  request(
    `https://lidemy-http-challenge.herokuapp.com/api/books?q=${nameBook}`,
    (error, response, body) => {
      console.log(body);
    },
  );
}

function deleteBook(id) {
  request.delete(
    `https://lidemy-http-challenge.herokuapp.com/api/books/${id}`,
    (error, response, body) => {
      console.log(JSON.parse(body));
    },
  );
}


switch (action) {
  case 'creat':
    creatBook(params, params2);
    break;
  case 'search':
    searchBook(params);
    break;
  case 'delete':
    deleteBook(params);
    break;
  default:
    console.log('creat!!! search!!!');
}
