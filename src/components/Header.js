import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';
import logo from '../assets/img/logo.webp';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAccount = () => {
    setAccountOpen(!accountOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('nav')) {
        setMenuOpen(false);
        setAccountOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header>
     <Link to ="/"> <img src={logo} alt="Therapeute" /></Link>
      <nav>
        <ul className={`nav__ul ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/tool" onClick={() => setMenuOpen(false)}>Mes outils</Link></li>
          <li><Link to="/rdv" onClick={() => setMenuOpen(false)}>Prendre RDV</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li onClick={toggleAccount} className='nav__account'>Compte</li>
          <ul className={`nav__ul__account ${accountOpen ? 'accountDisplay' : ''}`}>
            <li><Link to="/signup" onClick={() => setAccountOpen(false)}>Créer un compte</Link></li>
            <li><Link to="/login" onClick={() => setAccountOpen(false)}>S'identifier</Link></li>
            <li>Se déconnecter</li>
          </ul>
        </ul>
        <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
      </nav>
    </header>
  );
};

export default Header;
