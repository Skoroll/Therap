import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Page/Home';
import NotFound from './Page/NotFound';
import RDV from './Page/RDV';
import Contact from './Page/Contact';
import SignUp from './Page/SignUp';
import Login from './Page/Login'; // Importer le composant Login
import Tools from './Page/Tools';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rdv" element={<RDV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} /> {/* Ajouter la route pour le login */}
            <Route path="/tool" element={<Tools />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
