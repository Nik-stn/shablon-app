import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TemplatesList = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await axios.get('https://vercel.com/stns-projects/shablon-app');
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
        {templates.map((template, index) => (
          <li key={index}>
            <strong>{template.title}</strong> — {template.description}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default TemplatesList;