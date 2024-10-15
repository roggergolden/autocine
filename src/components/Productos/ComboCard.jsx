import React from 'react';
import './ComboCard.css'; // Importa los estilos personalizados

const ComboCard = ({ combo }) => {
  return (
    <div className="combo-card">
      <h3>{combo.nombre_combo}</h3>
      <p>{combo.descripcion_combo}</p>
      <p>Precio: S/. {combo.precio_combo}</p>
    </div>
  );
};

export default ComboCard;
