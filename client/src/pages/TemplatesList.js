import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TemplatesList = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await axios.get('http://localhost:5000/api/templates');
      setTemplates(res.data);
    };
    fetchTemplates();
  }, []);

  return (
    <div>
      <h1>Список шаблонов</h1>
      <ul>
        {templates.map((template) => (
          <li key={template.id}>{template.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TemplatesList;
