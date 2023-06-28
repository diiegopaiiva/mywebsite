import React, { useState } from 'react';
import './Login.css';
import { auth, firestore, firebaseConfig, analytics } from './firebaseConfig.js';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticação com Firebase aqui
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Sucesso ao fazer login
        const user = userCredential.user;
        console.log('Usuário logado:', user);
      })
      .catch((error) => {
        // Erro ao fazer login
        console.log('Erro ao fazer login:', error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Facebook</h1>
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="login-input"
            placeholder="Email ou telefone"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" className="login-button">Entrar</button>
          <a href="#" className="forgot-password-link">Esqueceu a senha?</a>
          <button type="submit" className="create-account-button">Criar nova conta</button>
        </form>

      </div>
    </div>
  );
};

export default Login;
