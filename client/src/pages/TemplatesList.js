import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Для перехода к созданию нового шаблона

const TemplatesList = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/templates');
        setTemplates(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Ошибка загрузки шаблонов', err);
        setError('Ошибка загрузки шаблонов');
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  return (
    <div>
      <h1>Список шаблонов</h1>
      {loading ? (
        <p>Загрузка шаблонов...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {templates.map((template) => (
            <li key={template.id}>
              <strong>{template.title}</strong> — {template.description}
            </li>
          ))}
        </ul>
      )}
      <Link to="/create" className="btn btn-secondary">Создать новый шаблон</Link>
    </div>
  );
};

export default TemplatesList;