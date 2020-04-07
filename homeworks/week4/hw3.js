/* eslint-disable import/no-extraneous-dependencies */
const request = require('request');

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';

const args = process.argv;
const action = args[2];
const params = args[3];

function listBook() {
  request(
    `${API_ENDPOINT}/books`,
    (error, response, body) => {
      if (error) return console.log('抓取失敗');
      console.log('statusCode:', response && response.statusCode);
      const data = JSON.parse(body);
      for (let i = 0; i < data.length; i += 1) {
        console.log(`No.${data[i].id} ${data[i].name}`);
      }
      return true;
    },
  );
}

function readBook(id) {
  request(
    `${API_ENDPOINT}/books/${id}`,
    (error, response, body) => {
      if (error) return console.log('抓取失敗');
      console.log('statusCode:', response && response.statusCode);
      const data = JSON.parse(body);
      console.log(`No.${data.id} ${data.name}`);
      return true;
    },
  );
}

function deleteBook(id) {
  request.delete(
    `${API_ENDPOINT}/books/${id}`,
    (error, response, body) => {
      if (error) return console.log('刪除失敗');
      console.log('statusCode:', response && response.statusCode);
      const data = JSON.parse(body);
      console.log(`No.${data.id} ${data.name}`);
      return true;
    },
  );
}

function createBook(name) {
  request.post(
    {
      url: `${API_ENDPOINT}/books`,
      form: {
        name,
      },
    },
    (error, response, body) => {
      if (error) return console.log('新增失敗');
      console.log('statusCode:', response && response.statusCode);
      const data = JSON.parse(body);
      console.log(`No.${data.id} ${data.name}`);
      console.log('新增成功');
      return true;
    },
  );
}

function updateBook(id, name) {
  request.patch(
    {
      url: `${API_ENDPOINT}/books/${id}`,
      form: {
        name,
      },
    },
    (error, response, body) => {
      if (error) return console.log('修改失敗');
      console.log('statusCode:', response && response.statusCode);
      const data = JSON.parse(body);
      console.log(`No.${data.id} ${data.name}`);
      console.log('修改成功');
      return true;
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
  case 'delete':
    deleteBook(params);
    break;
  case 'create':
    createBook(params);
    break;
  case 'update':
    updateBook(params, args[4]);
    break;
  default:
    console.log('Available commands : list, read, delete, update');
}
