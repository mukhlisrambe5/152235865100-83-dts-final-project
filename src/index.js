import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

import ProtectedComponent from './components/ProtectedComponent';
import ProtectedComponentLogged from './components/ProtectedComponentLogged';
import About from './containers/About';
import Search from './containers/Search';
import DetailPage from './containers/DetailPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedComponent>
            <ProtectedComponentLogged>
              <App />
            </ProtectedComponentLogged>
          </ProtectedComponent>
        } />
        <Route path='/browse/categories/:id' element= {
          <ProtectedComponent>
            <DetailPage/>
          </ProtectedComponent>
        } props= 'true'
          />
        <Route path="login" element={
          <ProtectedComponentLogged>
            <LoginPage />
          </ProtectedComponentLogged>
        } />
        <Route path="register" element={
          <ProtectedComponentLogged>
            <RegisterPage />
          </ProtectedComponentLogged>
        } />
        <Route path="search" element={
            <ProtectedComponentLogged>
              <Search />
            </ProtectedComponentLogged> 
        } />
        <Route path="about" element={
            <ProtectedComponentLogged>
              <About />
            </ProtectedComponentLogged> 
        } />
        <Route path="*" element={<h1>404 - Halaman tidak ditemukan</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
