import React from 'react';
import './ResumenCompra.css'; // Importa los estilos personalizados

const ResumenCompra = ({ total }) => {
  return (
    <div className="resumen-compra">
      <h3>Total a pagar: S/. {total}</h3>
      <button className="btn-pago">Pagar</button>
    </div>
  );
};

export default ResumenCompra;
