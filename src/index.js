import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './layout/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './layout/Register';
import Login from './layout/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

