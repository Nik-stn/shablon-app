// api/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('../config/db'); // Импортируем функцию подключения к базе данных
const Template = require('../models/Template'); // Импортируем модель шаблона

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Подключение к MongoDB
connectDB();

app.post('/api/templates', async (req, res) => {
  const { title, description } = req.body;
  const newTemplate = new Template({ title, description });
  await newTemplate.save();
  res.status(201).json(newTemplate);
});

app.get('/api/templates', async (req, res) => {
  const templates = await Template.find();
  res.json(templates);
});

module.exports = app; // Экспортируем приложение
