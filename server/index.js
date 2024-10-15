// server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let templates = []; // Массив для хранения шаблонов

app.post('/api/templates', (req, res) => {
  const { title, description } = req.body;
  const newTemplate = { id: templates.length + 1, title, description };
  templates.push(newTemplate);
  res.status(201).json(newTemplate);
});

app.get('/api/templates', (req, res) => {
  res.json(templates);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
