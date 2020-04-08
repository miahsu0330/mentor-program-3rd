/* eslint-disable import/no-extraneous-dependencies */
const request = require('request');

const API_ENDPOINT = 'https://lidemy-http-challenge.herokuapp.com/api/v2';
const arge = process.argv;
const action = arge[2];
const params = arge[3];
const Base64Encoded = 'YWRtaW46YWRtaW4xMjM=';

function listBook() {
  request({
    method: 'GET',
    url: `${API_ENDPOINT}`,
    headers: {
      Authorization: `Basic ${Base64Encoded}`,
    },
  },
  (error, response, body) => {
    console.log(JSON.parse(body));
  });
}

function creatBook(nameBook, isbn) {
  request.post({
    url: API_ENDPOINT,
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
    `${API_ENDPOINT}/books?q=${nameBook}`,
    (error, response, body) => {
      console.log(body);
    },
  );
}

function deleteBook(id) {
  request({
    method: 'DELETE',
    url: `${API_ENDPOINT}/books/${id}`,
    headers: {
      Authorization: `Basic ${Base64Encoded}`,
    },
  },
  (error, response, body) => {
    if (error) return console.log('刪除失敗');
    console.log('statusCode:', response && response.statusCode);
    console.log(JSON.parse(body));
    return true;
  });
}


function updateBook(id, isbn) {
  request({
    method: 'PATCH',
    url: `${API_ENDPOINT}/books/${id}`,
    headers: {
      Authorization: `Basic ${Base64Encoded}`,
    },
    form: {
      ISBN: isbn,
    },
  },
  (error, response, body) => {
    if (error) return console.log('更新失敗');
    console.log('statusCode:', response && response.statusCode);
    console.log(JSON.parse(body));
    return true;
  });
}


function sysInfo() {
  request({
    method: 'GET',
    url: `${API_ENDPOINT}/sys_info`,
    headers: {
      Authorization: `Basic ${Base64Encoded}`,
      'X-Library-Number': '20',
      'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.1; Windows XP)', // ie6
      // http://useragentstring.com/pages/useragentstring.php?name=Internet+Explorer
    },
  },
  (error, response, body) => {
    if (error) return console.log('獲取失敗');
    console.log('statusCode:', response && response.statusCode);
    console.log(body);
    return true;
  });
}


switch (action) {
  case 'list':
    listBook();
    break;
  case 'creat':
    creatBook(params, arge[4]);
    break;
  case 'search':
    searchBook(params);
    break;
  case 'delete':
    deleteBook(params);
    break;
  case 'update':
    updateBook(params, arge[4]);
    break;
  case 'sysInfo':
    sysInfo();
    break;
  default:
    console.log('creat!!! search!!! delete!!! sysInfo!!!');
}
