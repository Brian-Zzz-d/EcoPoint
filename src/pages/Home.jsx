import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [segundos, setSegundos] = useState(3);

  useEffect(() => {
    // Cuenta atrás visible
    const timer = setInterval(() => {
      setSegundos((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/login');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

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

        {/* Barra de estado visible */}
        <div style={{
          width: '100%',
          height: '10px',
          backgroundColor: 'var(--disabled-color)',
          borderRadius: '10px',
          margin: '0 auto 15px auto',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${((4 - segundos) / 3) * 100}%`,
            height: '100%',
            backgroundColor: 'var(--primary-color)',
            transition: 'width 1s linear'
          }}></div>
        </div>

        <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
          Cargando aplicación en {segundos}...
        </p>
      </div>
    </div>
  );
}