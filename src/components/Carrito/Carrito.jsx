import React, { useContext } from 'react';
import CarritoContext from '../../context/CarritoContext';
import CarritoItem from './CarritoItem';
import ResumenCompra from './ResumenCompra';
import './Carrito.css'; // Importa los estilos personalizados

const Carrito = () => {
  const { carrito, total } = useContext(CarritoContext);

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      <div className="carrito-items">
        {carrito.map((item) => (
          <CarritoItem key={item.id} item={item} />
        ))}
      </div>
      <ResumenCompra total={total} />
    </div>
  );
};

export default Carrito;
