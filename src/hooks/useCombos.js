import { useState } from 'react';
import axios from 'axios';

const useCombos = () => {
  const [combos, setCombos] = useState([]);

  const obtenerCombos = async () => {
    try {
      const response = await axios.get('http://localhost:8082/apiRest/combos/obtener');
      setCombos(response.data);
    } catch (error) {
      console.error('Error al obtener combos:', error);
    }
  };

  return { combos, obtenerCombos };
};

export default useCombos;
