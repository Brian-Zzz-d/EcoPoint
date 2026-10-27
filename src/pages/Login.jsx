import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setFeedback('⚠️ Formato de correo incorrecto (debe contener "@").');
      return;
    }
    setFeedback('✅ ¡Bienvenido a EcoPoint! Sesión iniciada correctamente.');
  };

  return (
    <div className="content-container">
      <div className="card">
        <div style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>♻️</div>
        <h2>Iniciar Sesión</h2>

        {feedback && <div role="alert" className="feedback-banner">{feedback}</div>}

        <form onSubmit={handleLogin} style={{ textAlign: 'left' }}>
          <label htmlFor="login-email">Correo electrónico:</label>
          <input
            id="login-email"
            type="email"
            required
            placeholder="nombre@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br /><br />

          <label htmlFor="login-pass">Contraseña:</label>
          <input id="login-pass" type="password" required placeholder="••••••••" />

          <br /><br />

          <button type="submit" className="btn btn-primary">Entrar</button>
        </form>

        <p style={{ fontSize: '0.9rem', marginTop: '20px' }}>
          ¿No tienes cuenta? <Link to="/registro" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Regístrate</Link>
        </p>
      </div>
    </div>
  );
}