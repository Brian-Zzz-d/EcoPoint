import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from './pages/Success';
import NotFound from './pages/NotFound';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Cada vez que la app se carga o se recarga (F5), muestra el Splash 2.5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  // 1. SI ESTÁ EN TIEMPO DE SPLASH: Muestra la pantalla de carga sin importar la ruta
  if (showSplash) {
    return (
      <div className="content-container">
        <div className="card" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', color: 'var(--primary-color)', marginBottom: '10px' }}>
            ♻️
          </div>
          <h1 style={{ fontSize: '2.2rem', margin: '0 0 5px 0' }}>EcoPoint</h1>
          <p style={{ color: 'gray', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
            Recicla bien, recicla juntos
          </p>

          {/* Barra de progreso animada */}
          <div style={{
            width: '80%',
            height: '8px',
            backgroundColor: 'var(--disabled-color)',
            borderRadius: '10px',
            margin: '0 auto',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--primary-color)',
              borderRadius: '10px',
              animation: 'splashLoading 2.5s ease-in-out'
            }}></div>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'gray', marginTop: '12px' }}>Cargando...</p>
        </div>
      </div>
    );
  }

  // 2. UNA VEZ PASADO EL SPLASH: Muestra la navegación normal de la app
  return (
    <BrowserRouter>
      {/* Header Limpio: Solo Logo y Modo Oscuro */}
      <header className="navbar">
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'var(--primary-color)', fontSize: '1.2rem' }}>
          🌱 EcoPoint
        </Link>
        <button onClick={toggleDarkMode} className="btn-secondary" style={{ width: 'auto', padding: '0.4rem 0.8rem' }}>
          {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/exito" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}