import React from 'react';
import './PeliculaCard.css';

const PeliculaCard = ({ pelicula, image, onEdit, onDelete }) => {
  return (
    <div className="pelicula-card">
      {/* Usar la imagen pasada como prop en lugar de pelicula.poster_url */}
      <img src={image} alt={pelicula.titulo} className="pelicula-poster" />
      <h3>{pelicula.titulo}</h3>
      <p>{pelicula.sinopsis}</p>
      <p><strong>Duración:</strong> {pelicula.duracion} min</p>
      <p><strong>Director:</strong> {pelicula.director}</p>
      <p><strong>Fecha de Estreno:</strong> {new Date(pelicula.fecha_estreno).toLocaleDateString()}</p>

      {/* Opciones de edición y eliminación */}
      <div className="card-options">
        <button onClick={() => onEdit(pelicula)}>Editar</button>
        <button onClick={() => onDelete(pelicula.id_pelicula)}>Eliminar</button>
      </div>
    </div>
  );
};

export default PeliculaCard;
