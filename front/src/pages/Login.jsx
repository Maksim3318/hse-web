import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

const loginUrl = 'http://127.0.0.1:8000/accounts/login/';

export default function Login() {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      username: username,
      password: password
    };

    console.log(username);
    console.log(password);
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios.defaults.withCredentials = true;

    axios.post(loginUrl, {
      headers: {
        'Content-Type': 'application/json',
        // 'X-CSRFTOKEN': csrfToken,
      },
    })
      .then(res => {
        console.log(res);
        // console.log(res.data);
        // const token = res.data.token;
        // const username = res.data.username;
        // localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        history.push("/");

      })
      .catch((error) => {
        console.log(error);
        // console.log(error.response.data.errors.error[0]);
        setErrorMessage("Такого пользователя не существует!");
      })
  }



  // const getCookie = (name) => {
  //   const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  //   return cookieValue ? cookieValue.pop() : '';
  // };

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
              <input type="hidden" name="next" value={history.state?.next || '/'} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-1"></div>
      </form>
    </div>
  )
}