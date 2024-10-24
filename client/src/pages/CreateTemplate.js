import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Для навигации
import axios from 'axios';

const CreateTemplate = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Для навигации после создания

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://shablon-app.vercel.app/', {
        title,
        description,
      });

      console.log('Шаблон создан:', response.data);
      setTitle('');
      setDescription('');
      setError('');
      navigate('/'); // Переход на страницу со списком
    } catch (err) {
      console.error('Ошибка создания шаблона', err);
      setError('Ошибка создания шаблона');
    }
  };

  return (
    <div>
      <h2>Создать Шаблон</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Заголовок</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Описание</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Создать</button>
      </form>
    </div>
  );
};

export default CreateTemplate;