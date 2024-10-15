// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateTemplate from './pages/CreateTemplate';
import TemplatesList from './pages/TemplatesList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <h1>Форма Шаблонов</h1>
        <Routes>
          <Route path="/" element={<TemplatesList />} />
          <Route path="/create" element={<CreateTemplate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
