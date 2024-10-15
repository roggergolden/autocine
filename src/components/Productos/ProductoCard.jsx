import React, { useContext } from 'react';
import './ProductoCard.css'; // Importa los estilos personalizados
import CarritoContext from '../../context/CarritoContext'; // Importa el contexto del carrito

const ProductoCard = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CarritoContext); // Obtener la función para agregar al carrito

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito({
      id: producto.id_producto,
      nombre: producto.nombre,
      cantidad: 1, // Agregamos una unidad por defecto
      precio: producto.precio
    });
  };

  return (
    <div className="producto-card">
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Precio: S/. {producto.precio}</p>
      <button onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductoCard;
