import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const COURSES = [
  ['1 курс', '1 курс'],
  ['2 курс', '2 курс'],
  ['3 курс', '3 курс'],
  ['4 курс', '4 курс'],
  ['1 курс (магистратура)', '1 курс (магистратура)'],
  ['2 курс (магистратура)', '2 курс (магистратура)'],
  ['Аспирантура', 'Аспирантура'],
  ['Сотрудник', 'Сотрудник'],
];

const GROUPS = [
  ['ИВТ', 'ИВТ'],
  ['ИТСС', 'ИТСС'],
  ['КБ', 'КБ'],
  ['ПМ', 'ПМ'],
  ['ИБ', 'ИБ'],
  ['Другое', 'Другое'],
];

const SuccessMessage = ({message}) => {
  if (message) {
    return (
      <div className="text-center alert alert-success" style={{ fontSize: 20, marginBottom: '60px' }}>
        {message}
      </div>
    );
  }

  return null;
}

const Appform = () => {
  const [formData, setFormData] = useState({
    mail: '',
    name: '',
    op: '',
    course: '',
    project_name: '',
    teach_name: '',
    phone: '',
    dmodel: null,
    note: null,
    comment: '',
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/appform/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Сброс формы после успешной отправки
      setFormData({
        mail: '',
        name: '',
        op: '',
        course: '',
        project_name: '',
        teach_name: '',
        phone: '',
        dmodel: null,
        note: null,
        comment: '',
      });

      setMessage(`Заявка ${res.data.number} отправлена!`);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  return (
    <div>
      <section className="space-md">
          <div className="container">
              <div className="row" style={{ marginBottom: '60px' }}>
                  <div className="col-lg-2 col-sm-0"></div>
                  <div className="col-lg-8 col-sm-12 text-center frame">
                      <h1 className="maintitle">Подать заявку на<br/>3D-печать</h1>
                  </div>
                  <div className="col-lg-2 col-sm-0"></div>
              </div>
              <SuccessMessage message={message}/>
              <form className="row" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="row sub_input">
                    <div className="col-lg-6 text-right">Электронная почта</div>
                    <div className="col-lg-6">
                      <input type="email" name="mail" value={formData.mail} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row sub_input">
                    <div className="col-lg-6 text-right">Фамилия Имя Отчество</div>
                    <div className="col-lg-6">
                      <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row sub_input">
                    <div className="col-lg-6 text-right">Образовательная программа</div>
                    <div className="col-lg-6">
                    <select name="op" value={formData.op} onChange={handleChange}>
                      <option value=""></option>
                      {GROUPS.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    </div>
                  </div>
                  <div className="row sub_input">
                    <div className="col-lg-6 text-right">Курс</div>
                    <div className="col-lg-6">
                    <select name="course" value={formData.course} onChange={handleChange}>
                      <option value=""></option>
                      {COURSES.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    </div>
                  </div>
                  <div className="row sub_input">
                    <div className="col-lg-6 text-right">Название проекта или КР/ВКР</div>
                    <div className="col-lg-6">
                      <input type="text" name="project_name" value={formData.project_name} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row sub_input">
                    <div className="col-lg-6 text-right">ФИО Научного руководителя</div>
                    <div className="col-lg-6">
                      <input type="text" name="teach_name" value={formData.teach_name} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row sub_input">
                    <div className="col-lg-6 text-right">Телефон</div>
                    <div className="col-lg-6">
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row sub_input">
                    <div className="col-lg-6 text-right">3d-модель</div>
                    <div className="col-lg-6">
                      <input type="file" name="dmodel" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row sub_input">
                    <div className="col-lg-6 text-right">Скан служебной записки (pdf)</div>
                    <div className="col-lg-6">
                      <input type="file" name="note" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row sub_input">
                    <div className="col-lg-6 text-right">Комментарий к заявке</div>
                    <div className="col-lg-6">
                      <input type="text" name="comment" value={formData.comment} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row sub-form">
                      <div className="col-lg-4"></div>
                      <input className="col-lg-4" type="submit" value="Отправить"/>
                      <div className="col-lg-4"></div>
                  </div>

                  </div>
                  <div className="col-lg-3"></div>
              </form>
          </div>
      </section>
    </div>
  )
}

export default Appform
