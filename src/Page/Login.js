import React from 'react';
import LoginForm from '../components/LoginForm';
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h2>Se connecter</h2>
      <LoginForm />
    </main>
  );
};

export default Login;
