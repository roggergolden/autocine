import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Productos.css'; // Importa tus estilos personalizados

// Importa las imágenes locales
import PalomitasGrandes from '../assets/palomitas1.png';
import PalomitasMedianas from '../assets/palomitas2.png';
import RefrescoGrande from '../assets/vaso.png';
import HotDog from '../assets/hotdog.png';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los productos
    axios.get('http://localhost:8082/apiRest/productos/obtener')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  // Mapear imágenes locales con productos según el ID
  const obtenerImagenLocal = (id_producto) => {
    switch (id_producto) {
      case 1:
        return PalomitasGrandes;
      case 2:
        return PalomitasMedianas;
      case 3:
        return RefrescoGrande;
      case 4:
        return HotDog;
      default:
        return ''; // Imagen por defecto si no se encuentra
    }
  };

  return (
    <div className="productos-container">
      <h1>Productos Disponibles</h1>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id_producto} className="producto-card">
            <img src={obtenerImagenLocal(producto.id_producto)} alt={producto.nombre} />
            <div className="producto-details">
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <div className="producto-price">${producto.precio}</div>
              <div className="producto-add-to-cart">
                <button>Agregar al Carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
