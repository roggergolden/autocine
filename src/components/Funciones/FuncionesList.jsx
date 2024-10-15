import React, { useEffect } from 'react';
import useFunciones from '../../hooks/useFunciones';
import './FuncionesList.css'; // Importa estilos personalizados

const FuncionesList = ({ peliculaId }) => {
  const { funciones, obtenerFunciones } = useFunciones();

  useEffect(() => {
    if (peliculaId) {
      obtenerFunciones(peliculaId);
    }
  }, [peliculaId]);

  return (
    <div className="funciones-list">
      {funciones.map((funcion) => (
        <div key={funcion.id_funcion} className="funcion-item">
          <p>Fecha: {funcion.fecha_funcion}</p>
          <p>Hora de inicio: {funcion.hora_inicio}</p>
          <p>Capacidad de autos: {funcion.capacidad_autos}</p>
        </div>
      ))}
    </div>
  );
};

export default FuncionesList;
