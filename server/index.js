const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); 
const Template = require('./models/Template'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

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

module.exports = (req, res) => {
  app(req, res);
};
