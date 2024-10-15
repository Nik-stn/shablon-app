import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateTemplate from './pages/CreateTemplate';
import TemplatesList from './pages/TemplatesList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <h1>Форма Шаблонов</h1>
        <nav>
          <Link to="/" className="btn btn-primary mr-2">Список шаблонов</Link>
          <Link to="/create" className="btn btn-secondary">Создать шаблон</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TemplatesList />} />
          <Route path="/create" element={<CreateTemplate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
