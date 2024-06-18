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

const Appform = () => {
  const [formData, setFormData] = useState({
    number: '',
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'dmodel' || key === 'note') {
        formData.append(key, formData[key] || '');
      } else {
        formData.append(key, formData[key]);
      }
    });
    try {
      await axios.post('http://127.0.0.1:8000/appform/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Сброс формы после успешной отправки
      setFormData({
        number: '',
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
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  return (
    <div>
      <section class="space-md">
          <div class="container ">
              <div class="row" style={{"margin-bottom": "60px"}}>
                  <div class="col-lg-2 col-sm-0"></div>
                  <div class="col-lg-8 col-sm-12 text-center frame">
                      <h1 class="maintitle">Подать заявку на<br/>3D-печать</h1>
                  </div>
                  <div class="col-lg-2 col-sm-0"></div>
              </div>
              <form className="row" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="row sub_input">
                    <div className="col-lg-6 text-right">Номер заявки</div>
                    <div className="col-lg-6">
                      <input type="text" name="number" value={formData.number} onChange={handleChange} />
                    </div>
                  </div>
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