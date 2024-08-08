// src/components/Header.js
import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/components/Header.scss';
import logo from '../assets/img/logo.webp';
import frFlag from '../assets/img/FR-1x1.66.png';
import ukFlag from '../assets/img/Flag_of_the_United_Kingdom.svg.png';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [language, setLanguage] = useState('FR');
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const accountRef = useRef(null);

  const handleMouseEnterMenu = () => {
    setMenuOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    setMenuOpen(false);
  };

  const handleMouseEnterAccount = () => {
    setAccountOpen(true);
  };

  const handleMouseLeaveAccount = () => {
    setAccountOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'FR' ? 'UK' : 'FR'));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          accountRef.current && !accountRef.current.contains(event.target)) {
        setMenuOpen(false);
        setAccountOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header>
      <Link to="/"><img className="logo" src={logo} alt="Therapeute" /></Link>
      <p>
    {user ? (
      <>Bonjour, <span className='nav_user_name'>{user.firstName} {user.lastName}</span></>
    ) : ''}
  </p>
      <nav>
        <ul
          className={`nav__ul ${menuOpen ? 'open' : ''}`}
          onMouseEnter={handleMouseEnterMenu}
          onMouseLeave={handleMouseLeaveMenu}
          ref={menuRef}
        >
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/tool" onClick={() => setMenuOpen(false)}>Mes outils</Link></li>
          <li><Link to="/rdv" onClick={() => setMenuOpen(false)}>Prendre RDV</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          {!user && (
            <li
              className='nav__account'
              onMouseEnter={handleMouseEnterAccount}
              onMouseLeave={handleMouseLeaveAccount}
              ref={accountRef}
            >
              Compte
              <ul className={`nav__ul__account ${accountOpen ? 'accountDisplay' : ''}`}>
                <li><Link to="/signup" id='createAccount' onClick={() => setAccountOpen(false)}>Créer un compte</Link></li>
                <li><Link to="/login" onClick={() => setAccountOpen(false)}>S'identifier</Link></li>
              </ul>
            </li>
          )}
          {user && <li onClick={handleLogout}>Se déconnecter</li>}
        </ul>
      </nav>
      <div className='mobile-nav'>
        <i className="fa-solid fa-bars" onClick={handleMouseEnterMenu}></i>
      </div>
    </header>
  );
};

export default Header;
