import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/LoginForm.scss';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Une adresse e-mail est obligatoire';
    if (!formData.password) newErrors.password = 'Mot de passe requis';
    return newErrors;
  };

  const generateToken = () => {
    return Math.random().toString(36).substr(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const storedUser = JSON.parse(localStorage.getItem('user'));

      // Assurez-vous de vérifier si storedUser existe avant de comparer les valeurs
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        const token = generateToken();
        storedUser.token = token;
        localStorage.setItem('user', JSON.stringify(storedUser));
        console.log('Login successful, token generated:', token);
        navigate('/');
      } else {
        setErrors({ login: 'Email ou mot de passe incorrect' });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Mot de passe</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      {errors.login && <p className="error">{errors.login}</p>}

      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
