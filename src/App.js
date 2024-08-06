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
import Login from './Page/Login';
import Tools from './Page/Tools';
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <div className='content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rdv" element={<RDV />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/tool" element={<Tools />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
