import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();

  // Redirige automáticamente al Login tras 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="content-container">
      <div className="card" style={{ textAlign: 'center', padding: '3.5rem 1.5rem' }}>
        <div style={{
          width: '75px',
          height: '75px',
          borderRadius: '50%',
          border: '3px solid var(--primary-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto',
          fontSize: '2.2rem',
          color: 'var(--primary-color)',
          fontWeight: 'bold'
        }}>
          ✓
        </div>
        <h2>¡Cuenta creada correctamente!</h2>
        <p style={{ color: 'gray', margin: '1rem 0 2rem 0' }}>
          Ya puedes escanear tus residuos y encontrar tu punto limpio más cercano.
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>
          Redirigiendo al inicio de sesión...
        </p>
      </div>
    </div>
  );
}