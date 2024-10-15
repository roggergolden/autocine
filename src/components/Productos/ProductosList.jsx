import React, { useEffect } from 'react';
import ProductoCard from './ProductoCard';
import ComboCard from './ComboCard';
import useProductos from '../../hooks/useProductos';
import useCombos from '../../hooks/useCombos';  // Hook para los combos
import './ProductosList.css'; // Importa los estilos personalizados

const ProductosList = () => {
  const { productos, obtenerProductos } = useProductos();
  const { combos, obtenerCombos } = useCombos();  // Hook para los combos

  useEffect(() => {
    obtenerProductos();
    obtenerCombos();
  }, []);

  return (
    <div className="productos-list">
      <h2>Productos</h2>
      <div className="productos">
        {productos.map((producto) => (
          <ProductoCard key={producto.id_producto} producto={producto} />
        ))}
      </div>

      <h2>Combos</h2>
      <div className="combos">
        {combos.map((combo) => (
          <ComboCard key={combo.id_combo} combo={combo} />
        ))}
      </div>
    </div>
  );
};

export default ProductosList;
