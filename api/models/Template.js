// api/templates.js
const app = require('./index'); // Импортируем наше приложение
const serverless = require('serverless-http');

module.exports.handler = serverless(app); // Экспортируем обработчик
