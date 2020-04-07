/* eslint-disable import/no-extraneous-dependencies */
const request = require('request');

const CLIENT_ID = '2l9sai4382a94piorthfgjbum3osq6';
const args = process.argv;
const action = args[2];
const params = args[3];

function GETtopGames(num) {
  request({
    method: 'GET',
    url: `https://api.twitch.tv/helix/games/top?first=${num}`,
    headers: {
      'Client-ID': CLIENT_ID,
    },
  },
  (error, response, body) => {
    if (error) return console.log('抓取失敗');
    const { data } = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log(`Top${i + 1} ID:${data[i].id} Name:${data[i].name}`);
    }
    return true;
  });
}


switch (action) {
  case 'topGames':
    GETtopGames(params);
    break;
  default:
    console.log('available commands: topGames');
}
