// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logomaju from '../../assets/imgs/logomaju.png';

function Header() {
  return (
    <header className="App-header">
      <div className='links-categorias'>
        <Link to="/" className="logo-link">
          <img src={logomaju} className="App-logo" alt="Logo Majupapelaria" />
        </Link>
        <a className='links' href="/">Home</a>
        <a className='links' href="/casamentos">Casamentos</a>
        <a className='links' href="/aniversarios">Aniversários</a>
        <a className='links' href="/sazonais">Sazonais</a>
      </div>
    </header>
  );
}

export default Header;
