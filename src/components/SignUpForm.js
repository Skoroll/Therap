import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/SignUpForm.scss';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
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
    if (!formData.firstName) newErrors.firstName = 'Veuillez entrer votre prénom';
    if (!formData.lastName) newErrors.lastName = 'Veuillez entrer votre nom';
    if (!formData.password) newErrors.password = 'Mot de passe requis';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Erreur lors de la confirmation.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const userData = {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.password
      };
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('User Data Submitted and Stored:', userData);

      navigate('/Login');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
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
        <label>Prénom</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>

      <div className="form-group">
        <label>Nom</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
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

      <div className="form-group">
        <label>Confirmer le mot de passe</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>

      <button type="submit">S'enregistrer</button>
    </form>
  );
};

export default SignupForm;
