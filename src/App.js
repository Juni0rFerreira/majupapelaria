// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Home/index.js';
import CasamentosPage from './Pages/Casamentos/index.js'; // Importe o componente da página de casamentos
import AniversariosPage from './Pages/Aniversarios/index.js'; // Importe o componente da página de aniversários
import SazonaisPage from './Pages/Sazonais/index.js'; // Importe o componente da página de sazonais
import AdminUser from './Pages/AdminUser/index.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/casamentos' element={<CasamentosPage />} /> 
        <Route path='/aniversarios' element={<AniversariosPage />} /> 
        <Route path='/sazonais' element={<SazonaisPage />} />
        <Route path='/adminuser' element={<AdminUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
