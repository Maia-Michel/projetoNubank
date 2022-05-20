import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './layout/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './layout/Register';
import Login from './layout/Login';
import createGlobalStyle from './assets/styles/global';
import Extract from './layout/Extract';

const GlobalStyle = createGlobalStyle;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/extract" element={<Extract />} ></Route>
      
      </Routes>
    
    </BrowserRouter>
    <GlobalStyle/>
  </React.StrictMode>
);

