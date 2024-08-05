import React from 'react';
import '../styles/components/Footer.scss'
const Footer = () => {
  return (
    <footer>
      <div className='footer__contact'>
        <p className='footer__title'>Nous contacter</p>
        <p><i className="fa-solid fa-phone"></i> 00 00 00 00 00</p>
        <p><i className="fa-solid fa-envelope-open"></i> email@email.com</p>
        <p><i className="fa-solid fa-location-pin"></i> 2 rue Endroit, 99999 Lieu</p>
      </div>
      <div className='footer__bar'></div>
      <div className='footer__legal'>
      <p className='footer__title'>Mention légale</p>
      <p>&copy; 2024 My Website. All rights reserved.</p>
      </div>
      <div className='footer__bar'></div>
      <div className='footer__creator'>
      <p className='footer__title'>Créateur du site</p>
        <p>Crée par [Nom d'entreprise]</p>
      </div>
    </footer>
  );
};

export default Footer;
