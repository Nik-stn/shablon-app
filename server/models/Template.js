// server/models/Template.js
const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Template', TemplateSchema);
