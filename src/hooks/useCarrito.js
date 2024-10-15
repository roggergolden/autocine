import { useState } from 'react';

const useCarrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
    setTotal((prevTotal) => prevTotal + producto.precio * producto.cantidad);
  };

  const eliminarDelCarrito = (index) => {
    const producto = carrito[index];
    setTotal((prevTotal) => prevTotal - producto.precio * producto.cantidad);
    setCarrito(carrito.filter((_, i) => i !== index));
  };

  return { carrito, total, agregarAlCarrito, eliminarDelCarrito };
};

export default useCarrito;
