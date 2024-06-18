import React from 'react'
import { useState } from 'react';

const Findart = () => {

  const [formData, setFormData] = useState({
    num: '',
  });
  const [art, setArt] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Здесь вы можете отправить запрос на сервер и получить данные
      const response = await fetch(`/your-endpoint?num=${formData.num}`);
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setArt([]);
      } else {
        setArt(data.art);
        setError('');
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  };

  return (
    <div>
      <section className="space-md">
        <div className="container ">
            <div className="row" style={{"margin-bottom": "60px"}}>
                <div className="col-lg-2 col-sm-0"></div>
                <div className="col-lg-8 col-sm-12 text-center frame">
                    <h1 className="maintitle">Узнать статус заказа</h1>
                </div>
                <div className="col-lg-2 col-sm-0"></div>
            </div>

            <form className="row" onSubmit={handleSubmit}>
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div className="row sub_input">
                  <div className="col-lg-6 text-right">Номер заявки</div>
                  <div className="col-lg-6">
                    <input name="num" type="text" value={formData.num} onChange={handleChange} />
                  </div>
                </div>
                <div class="row sub-form">
                  <div class="col-lg-4"></div>
                  <input class="col-lg-4" type="submit" value="Найти"/>
                  <div class="col-lg-4"></div>
                </div>
                {art.length > 0 &&
                  art.map((el, index) => (
                    <div key={index} className="row sub_input" style={{ marginTop: '30px' }}>
                      <div className="col-lg-6 text-right font-weight-bold" style={{ padding: '3px' }}>
                        {el.number}
                      </div>
                      <div className="col-lg-6 font-weight-bold" style={{ padding: '3px' }}>
                        {el.status}
                      </div>
                    </div>
                  ))}

                {art.length === 0 && error && (
                  <div className="row sub_input" style={{ marginTop: '30px' }}>
                    <div className="col-lg-6 text-right font-weight-bold" style={{ padding: '3px' }}>
                      {error}
                    </div>
                    <div className="col-lg-6 font-weight-bold" style={{ padding: '3px' }}></div>
                  </div>
                )}
                </div>
              <div className="col-lg-3"></div>
          </form>

        </div>
      </section>
    </div>
  )
}

export default Findart