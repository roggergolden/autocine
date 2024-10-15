import { useState } from 'react';
import axios from 'axios';

const useProductos = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('http://localhost:8082/apiRest/productos/obtener');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  return { productos, obtenerProductos };
};

export default useProductos;
