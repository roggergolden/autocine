import { useState } from 'react';
import axios from 'axios';

const useFunciones = () => {
  const [funciones, setFunciones] = useState([]);

  const obtenerFunciones = async () => {
    try {
      const response = await axios.get('http://localhost:8082/apiRest/funciones/obtener');
      setFunciones(response.data);
    } catch (error) {
      console.error('Error al obtener funciones:', error);
    }
  };

  return { funciones, obtenerFunciones };
};

export default useFunciones;