import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './ArtList.css'

const statusOptions = [
  "На рассмотрении",
  "В обработке",
  "В работе",
  "Ожидает получения",
  "Отклонен",
  "Выполнен"
];

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).catch((err) => {
    console.error('Failed to copy: ', err);
  });
};

const updateArtStatus = async (number, status) => {
  const response = await fetch(`/outart/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ number, status })
  });
  console.log(response.json());
  if (!response.ok) {
    throw new Error('Failed to update status');
  }
};

const Outart = () => {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArts = async () => {
      let res = await axios.get(
        "/outart/",
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      setArts(res.data);
      setLoading(false);
    }

    getArts();
  }, []);

  const handleStatusChange = async (number, newStatus) => {
    try {
      await updateArtStatus(number, newStatus);
      setArts((prevArts) =>
        prevArts.map((art) =>
          art.number === number ? { ...art, status: newStatus } : art
        )
      );
    } catch (err) {
      console.error('Failed to update status: ', err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4" style={{marginTop: "95px"}}>Список заявок</h1>
      <div className="row">
        {arts.map((art) => (
          <div key={art.number} className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <p><strong>Номер заявки:</strong> {art.number}</p>
                <p><strong>Электронная почта:</strong> {art.mail}</p>
                <p><strong>ФИО:</strong> {art.name}</p>
                <p><strong>ОП:</strong> {art.op}</p>
                <p><strong>Курс:</strong> {art.course}</p>
                <p><strong>Название проекта или КР/ВКР:</strong> {art.project_name}</p>
                <p><strong>ФИО Научного руководителя:</strong> {art.teach_name}</p>
                <p><strong>Телефон:</strong> {art.phone}</p>
                <p>
                  <strong>3D модель:</strong>
                  <span title={art.dmodel}>
                    {truncateText(art.dmodel, 40)}
                  </span>
                  <button className="btn btn-link btn-sm" onClick={() => copyToClipboard(art.dmodel)}>Copy</button>
                </p>
                <p>
                  <strong>Скан служебной записки:</strong>
                  <span title={art.note}>
                    {truncateText(art.note, 40)}
                  </span>
                  <button className="btn btn-link btn-sm" onClick={() => copyToClipboard(art.note)}>Copy</button>
                </p>
                <p><strong>Комментарий к заявке:</strong> {art.comment}</p>
                <p>
                  <strong>Статус заказа:</strong>
                  <select
                    className="form-control"
                    value={art.status}
                    onChange={(e) => handleStatusChange(art.number, e.target.value)}
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outart;
