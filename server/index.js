// server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Импортируем функцию подключения к базе данных
const Template = require('./models/Template'); // Импортируем модель шаблона

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Подключение к MongoDB
connectDB();

app.post('/api/templates', async (req, res) => {
  const { title, description } = req.body;
  const newTemplate = new Template({ title, description }); // Используем модель Template
  await newTemplate.save(); // Сохраняем новый шаблон в базе данных
  res.status(201).json(newTemplate);
});

app.get('/api/templates', async (req, res) => {
  const templates = await Template.find(); // Получаем все шаблоны из базы данных
  res.json(templates);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
