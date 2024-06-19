import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const loginUrl = 'http://localhost:8000/accounts/login/';

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    console.log(username);
    console.log(password);

    const response = await fetch("http://localhost:8000/accounts/login/", {credentials: "include"});
    const text = await response.text();
    const csrf_token = text.match('csrfmiddlewaretoken.*value="(.*)"')[1];

    console.log(csrf_token);

    let loginFormData = new FormData();
    loginFormData.append("csrfmiddlewaretoken", csrf_token);
    loginFormData.append("username", username);
    loginFormData.append("password", password);

    axios.post('http://localhost:8000/accounts/login/', loginFormData, {
      withCredentials: true,
    })
      .then(_ => {
        localStorage.setItem('username', username);
        onLogin();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Такого пользователя не существует!");
      })
  }

  return (
    <div className="auth slider_list-g">
      <form method="post" className="row rowauth" onSubmit={handleSubmit}>
        <div className="col-lg-4 col-md-3 col-sm-1"></div>
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="form">
            <h1>Авторизация</h1>
            <div className="input-form">
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Имя пользователя"
              />
            </div>
            <div className="input-form">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />
            </div>
            <div className="input-form">
              <button type="submit">Войти</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-1"></div>
      </form>
    </div>
  )
}