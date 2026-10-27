import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="content-container" style={{ textAlign: 'center' }}>
      <div className="card">
        <h1>Error 404</h1>
        <p>Esta ruta no existe en EcoPoint.</p>
        <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
      </div>
    </div>
  );
}