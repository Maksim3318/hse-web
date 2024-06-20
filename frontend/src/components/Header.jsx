import React from 'react'
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appform from '../pages/Appform'
import Outart from '../pages/Outart'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Findart from '../pages/Findart'
import Index from '../pages/Index'
import Manual from '../pages/Manual'

function Navigation({ isAuthenticated, onLogout }) { 

  return (     
    <>   
      {isAuthenticated ? ( 
          <> 
          <li className="nav-item"> 
            <a className="nav-link js-scroll-trigger" href="/outart"> 
              Все заказы 
            </a> 
          </li> 
          <li className="nav-item"> 
            <a className="nav-link js-scroll-trigger" href="/logout" onClick={(e) => {onLogout();}}> 
              Выйти 
            </a> 
          </li> 
        </> 
      ) : ( 
        <li className="nav-item"> 
          <a className="nav-link js-scroll-trigger" href="/login"> 
            Войти 
          </a> 
        </li> 
      )} 
    </> 
  ); 
}

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('username');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsAuthenticated(false);
  };
  return (
    <div>
      <link rel="stylesheet" href="assets/css/style.css" type="text/css"/>
      <header className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3" id="mainNav">
          <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="/"><img className="logo" src="assets/img/logo.png" alt="3D MIEM"/>3D MIEM</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto" id="menu">
                      <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="/" style={{ fontWeight: 'bold'}}>Главная</a> </li>
                      <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="/appform">Подать заявку</a> </li>
                      <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="/findart">Статус заказа</a> </li>
                      <li className="nav-item"> <a className="nav-link js-scroll-trigger" href="/manual">Инструкция</a> </li>
                      <Navigation isAuthenticated={isAuthenticated} onLogin={handleLogin} onLogout={handleLogout} />
                  </ul>
              </div>
          </div>
      </header>
      <Router>
        <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/appform/' element={<Appform/>}/>
        <Route path='/outart/' element={<Outart/>}/>
        <Route path='/findart/' element={<Findart/>}/>
        <Route path='/login/' element={<Login onLogin={handleLogin}/>}/>
        <Route path='/logout/' element={<Logout/>}/>
        <Route path='/manual/' element={<Manual/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Header
