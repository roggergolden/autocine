import React from 'react';
import './ResumenPedido.css'; // Importa los estilos personalizados

const ResumenPedido = ({ pedido }) => {
  return (
    <div className="resumen-pedido">
      <h2>Resumen del Pedido</h2>
      <div className="pedido-detalle">
        {pedido.items.map((item) => (
          <div key={item.id} className="pedido-item">
            <p>{item.nombre}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: S/. {item.precio}</p>
          </div>
        ))}
      </div>
      <h3>Total: S/. {pedido.total}</h3>
    </div>
  );
};

export default ResumenPedido;
