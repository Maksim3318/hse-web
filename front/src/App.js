import React from 'react'
import Appform from './pages/Appform'
import Outart from './pages/Outart'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Findart from './pages/Findart'
import Index from './pages/Index'
import Manual from './pages/Manual'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'

// path('outart/edit/<str:number>/', v2.edit, name='edit'),
// path('accounts/login/', views.LoginView.as_view(), name='login'),
// path('accounts/logout/', views.LogoutView.as_view(), name='logout'),
// path('manual/', v2.manual, name='manual'),

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/appform/' element={<Appform/>}/>
        <Route path='/outart/' element={<Outart/>}/>
        <Route path='/findart/' element={<Findart/>}/>
        {/* <Route path='/outart/edit/<str:number>/' element={<appform/>}/> */}
        <Route path='/login/' element={<Login/>}/>
        <Route path='/logout/' element={<Logout/>}/>
        <Route path='/manual/' element={<Manual/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App