import { useState } from 'react';
import axios from 'axios';

const usePeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  const obtenerPeliculas = async () => {
    try {
      const response = await axios.get('http://localhost:8082/apiRest/peliculas/obtener');
      setPeliculas(response.data);
    } catch (error) {
      console.error('Error al obtener películas:', error);
    }
  };

  return { peliculas, obtenerPeliculas };
};

export default usePeliculas;
