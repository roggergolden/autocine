import React from 'react';
import './CarritoItem.css'; // Importa los estilos personalizados

const CarritoItem = ({ item }) => {
  return (
    <div className="carrito-item">
      <h4>{item.nombre}</h4>
      <p>Cantidad: {item.cantidad}</p>
      <p>Precio: S/. {item.precio_unitario}</p>
    </div>
  );
};

export default CarritoItem;
