import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Header.scss';
import logo from '../assets/img/logo.webp';
import frFlag from '../assets/img/FR-1x1.66.png';
import ukFlag from '../assets/img/Flag_of_the_United_Kingdom.svg.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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

  useEffect(() => {
    const isUserLoggedIn = () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      return storedUser && storedUser.token;
    };

    if (isUserLoggedIn()) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setFirstName(storedUser.firstName);
      setLastName(storedUser.lastName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setFirstName('');
    setLastName('');
    navigate('/login');
  };

  return (
    <header>
      <Link to="/"><img className="logo" src={logo} alt="Therapeute" /></Link>
      <p>{firstName && lastName ? `Bonjour, ${firstName} ${lastName}` : ''}</p>
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
          <li
            className='nav__account'
            onMouseEnter={handleMouseEnterAccount}
            onMouseLeave={handleMouseLeaveAccount}
            ref={accountRef}
          >
            Compte
            <ul className={`nav__ul__account ${accountOpen ? 'accountDisplay' : ''}`}>
              {!firstName && !lastName && (
                <li><Link to="/signup" id='createAccount' onClick={() => setAccountOpen(false)}>Créer un compte</Link></li>
              )}
                            {!firstName && !lastName && (
                 <li><Link to="/login" onClick={() => setAccountOpen(false)}>S'identifier</Link></li>
              )}
             
              {firstName && lastName && <li onClick={handleLogout}>Se déconnecter</li>}
            </ul>
          </li>
        </ul>
        <i className="fa-solid fa-bars" onClick={handleMouseEnterMenu}></i>
      </nav>
      <p onClick={toggleLanguage}>
        <img className="langChoiceFlag" src={language === 'FR' ? frFlag : ukFlag} alt={`Flag of ${language === 'FR' ? 'France' : 'UK'}`} />
      </p>
    </header>
  );
};

export default Header;
