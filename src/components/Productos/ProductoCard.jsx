import React, { useContext } from 'react';
import './ProductoCard.css';
import CarritoContext from '../../context/CarritoContext';

const ProductoCard = ({ producto, onEdit, onDelete }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <div className="producto-card">
      <img src={producto.imagen_url} alt={producto.nombre} className="producto-imagen" />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> S/. {producto.precio}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>

      {/* Opciones de edición y eliminación */}
      <div className="card-options">
        <button onClick={() => onEdit(producto)}>Editar</button>
        <button onClick={() => onDelete(producto.id_producto)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductoCard;
