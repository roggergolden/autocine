import React, { useEffect } from 'react';
import PeliculaCard from './PeliculaCard';
import usePeliculas from '../../hooks/usePeliculas';
import './PeliculasList.css'; // Importa estilos personalizados

const PeliculasList = () => {
  const { peliculas, obtenerPeliculas } = usePeliculas();

  useEffect(() => {
    obtenerPeliculas();
  }, []);

  const seleccionarPelicula = (idPelicula) => {
    console.log(`Pelicula seleccionada: ${idPelicula}`);
    // Aquí puedes redirigir a otra página o cargar funciones
  };

  return (
    <div className="peliculas-list">
      {peliculas.map((pelicula) => (
        <PeliculaCard key={pelicula.id_pelicula} pelicula={pelicula} onSelect={seleccionarPelicula} />
      ))}
    </div>
  );
};

export default PeliculasList;
