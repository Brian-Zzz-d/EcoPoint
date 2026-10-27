import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [cp, setCp] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [terms, setTerms] = useState(false);

  // Guarda qué campos han sido tocados por el usuario
  const [touched, setTouched] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const navigate = useNavigate();

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // Validación dinámica e inmediata
  const errors = {
    nombre: touched.nombre && !nombre.trim() ? 'El nombre es obligatorio.' : '',
    email: touched.email && (!email.trim() || !email.includes('@')) ? 'Introduce un correo válido (debe contener "@").' : '',
    cp: touched.cp && !cp.trim() ? 'El código postal o zona es obligatorio.' : '',
    pass: touched.pass && !pass ? 'La contraseña es obligatoria.' : '',
    confirmPass: touched.confirmPass && confirmPass !== pass ? 'Las contraseñas no coinciden.' : '',
    terms: touched.terms && !terms ? 'Debes aceptar los términos de uso.' : ''
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setTouched({
      nombre: true,
      email: true,
      cp: true,
      pass: true,
      confirmPass: true,
      terms: true
    });

    const hasErrors = !nombre.trim() || !email.includes('@') || !cp.trim() || !pass || pass !== confirmPass || !terms;

    if (!hasErrors) {
      navigate('/exito');
    }
  };

  return (
    <div className="content-container">
      <div className="card">
        <h2>Crear Cuenta</h2>

        <form onSubmit={handleRegister} style={{ textAlign: 'left' }}>
          {/* Campo: Nombre */}
          <div style={{ marginBottom: '1.2rem' }}>
            <label htmlFor="reg-name">Nombre:</label>
            <input
              id="reg-name"
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                setTouched((prev) => ({ ...prev, nombre: true }));
              }}
              onBlur={() => handleBlur('nombre')}
              style={{ borderColor: errors.nombre ? 'var(--error-color)' : '' }}
            />
            {errors.nombre && (
              <span style={{ color: 'var(--error-color)', fontSize: '0.8rem', display: 'block', marginTop: '4px' }}>
                ⚠️ {errors.nombre}
              </span>
            )}
          </div>

          {/* Campo: Email */}
          <div style={{ marginBottom: '1.2rem' }}>
            <label htmlFor="reg-email">Correo electrónico:</label>
            <input
              id="reg-email"
              type="text"
              placeholder="nombre@correo.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setTouched((prev) => ({ ...prev, email: true }));
              }}
              onBlur={() => handleBlur('email')}
              style={{ borderColor: errors.email ? 'var(--error-color)' : '' }}
            />
            {errors.email && (
              <span style={{ color: 'var(--error-color)', fontSize: '0.8rem', display: 'block', marginTop: '4px' }}>
                ⚠️ {errors.email}
              </span>
            )}
          </div>

          {/* Campo: Código Postal */}
          <div style={{ marginBottom: '1.2rem' }}>
            <label htmlFor="reg-cp">Código postal o zona:</label>
            <input
              id="reg-cp"
              type="text"
              placeholder="35001"
              value={cp}
              onChange={(e) => {
                setCp(e.target.value);
                setTouched((prev) => ({ ...prev, cp: true }));
              }}
              onBlur={() => handleBlur('cp')}
              style={{ borderColor: errors.cp ? 'var(--error-color)' : '' }}
            />
            {errors.cp && (
              <span style={{ color: 'var(--error-color)', fontSize: '0.8rem', display: 'block', marginTop: '4px' }}>
                ⚠️ {errors.cp}
              </span>
            )}
          </div>

          {/* Campo: Contraseña */}
          <div style={{ marginBottom: '1.2rem' }}>
            <label htmlFor="reg-pass">Contraseña:</label>
            <input
              id="reg-pass"
              type="password"
              placeholder="••••••••"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
                setTouched((prev) => ({ ...prev, pass: true }));
              }}
              onBlur={() => handleBlur('pass')}
              style={{ borderColor: errors.pass ? 'var(--error-color)' : '' }}
            />
            {errors.pass && (
              <span style={{ color: 'var(--error-color)', fontSize: '0.8rem', display: 'block', marginTop: '4px' }}>
                ⚠️ {errors.pass}
              </span>
            )}
          </div>

          {/* Campo: Repetir Contraseña */}
          <div style={{ marginBottom: '1.2rem' }}>
            <label htmlFor="reg-confirm">Repetir contraseña:</label>
            <input
              id="reg-confirm"
              type="password"
              placeholder="••••••••"
              value={confirmPass}
              onChange={(e) => {
                setConfirmPass(e.target.value);
                setTouched((prev) => ({ ...prev, confirmPass: true }));
              }}
              onBlur={() => handleBlur('confirmPass')}
              style={{ borderColor: errors.confirmPass ? 'var(--error-color)' : '' }}
            />
            {errors.confirmPass && (
              <span style={{ color: 'var(--error-color)', fontSize: '0.8rem', display: 'block', marginTop: '4px' }}>
                ⚠️ {errors.confirmPass}
              </span>
            )}
          </div>

          {/* Campo: Términos y Condiciones */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="checkbox"
                id="terms"
                checked={terms}
                onChange={(e) => {
                  setTerms(e.target.checked);
                  setTouched((prev) => ({ ...prev, terms: true }));
                }}
                style={{ width: 'auto', margin: 0 }}
              />
              <label htmlFor="terms" style={{ fontSize: '0.85rem' }}>Acepto los términos de uso</label>
            </div>
            {errors.terms && (
              <span style={{ color: 'var(--error-color)', fontSize: '0.8rem', display: 'block', marginTop: '4px' }}>
                ⚠️ {errors.terms}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">Crear cuenta</button>
        </form>

        <button 
          onClick={() => setShowConfirmModal(true)} 
          className="btn btn-secondary"
          style={{ marginTop: '15px' }}
        >
          Cancelar
        </button>

        {showConfirmModal && (
          <div role="dialog" aria-modal="true" className="modal">
            <p style={{ margin: '0 0 10px 0' }}>¿Estás seguro de que deseas cancelar el registro?</p>
            <button onClick={() => navigate('/login')} className="btn btn-danger">Sí, cancelar</button>
            <button onClick={() => setShowConfirmModal(false)} className="btn btn-secondary">Volver</button>
          </div>
        )}
      </div>
    </div>
  );
}