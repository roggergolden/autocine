import React from 'react';
import './PeliculaCard.css'; // Importa los estilos personalizados

const PeliculaCard = ({ pelicula, onSelect }) => {
  return (
    <div className="pelicula-card" onClick={() => onSelect(pelicula.id_pelicula)}>
      <img src={pelicula.poster_url} alt={pelicula.titulo} className="pelicula-poster" />
      <h3>{pelicula.titulo}</h3>
      <p>{pelicula.sinopsis}</p>
    </div>
  );
};

export default PeliculaCard;
