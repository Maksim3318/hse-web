import React from 'react'
import { useState } from 'react';

function Navigation({ user }) {
  return (
    <>
      {user.is_anonymous ? (
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="/login">
            Войти
          </a>
        </li>
      ) : (
        <>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/outart">
              Все заказы
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/logout">
              Выйти
            </a>
          </li>
        </>
      )}
    </>
  );
}

function Header() {
  const [user] = useState({ is_anonymous: true });
  return (
    <div>
      <link rel="stylesheet" href="assets/css/style.css" type="text/css"/>
      <header className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3" id="mainNav">
          <div className="container"> 
              <a className="navbar-brand js-scroll-trigger" href="/"><img className="logo" src="assets/img/logo.png" alt="3D MIEM"/>3D MIEM</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto" id="menu">
                      <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="/" style={{"font-weight":"bold"}}>Главная</a> </li>
                      <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="/appform">Подать заявку</a> </li>
                      <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="/findart">Статус заказа</a> </li>
                      <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="/manual">Инструкция</a> </li>
                      
                      <Navigation user={user} />
                  </ul>
              </div>
          </div>
      </header>
    </div>
  )
}

export default Header