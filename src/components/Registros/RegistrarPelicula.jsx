import React, { useState } from 'react';
import axios from 'axios';
import './RegistrarPeliculas.css'; // Estilos personalizados

const RegistrarPeliculas = () => {
  const [nuevaPelicula, setNuevaPelicula] = useState({
    titulo: '',
    duracion: '',
    sinopsis: '',
    poster_url: '',
    fecha_estreno: '',
    director: ''
  });
  const [mensaje, setMensaje] = useState(null); // Mensaje de éxito o error

  // Función para manejar cambios en los inputs del formulario
  const handleChange = (e) => {
    setNuevaPelicula({
      ...nuevaPelicula,
      [e.target.name]: e.target.value,
    });
  };

  // Función para enviar el formulario y registrar una nueva película
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8082/apiRest/peliculas/insertar', nuevaPelicula)
      .then(response => {
        setMensaje('Película registrada exitosamente'); // Mensaje de éxito
        setNuevaPelicula({
          titulo: '',
          duracion: '',
          sinopsis: '',
          poster_url: '',
          fecha_estreno: '',
          director: ''
        });
      })
      .catch(error => {
        setMensaje('Error al registrar película'); // Mensaje de error
        console.error('Error al registrar película:', error);
      });
  };

  return (
    <div className="registrar-peliculas-container">
      <h1>Registrar Nueva Película</h1>
      
      {/* Mostrar mensaje de éxito o error */}
      {mensaje && <div className="mensaje">{mensaje}</div>}
      
      <form onSubmit={handleSubmit} className="form-registrar-pelicula">
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={nuevaPelicula.titulo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="director"
          placeholder="Director"
          value={nuevaPelicula.director}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="duracion"
          placeholder="Duración (min)"
          value={nuevaPelicula.duracion}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="fecha_estreno"
          placeholder="Fecha de Estreno"
          value={nuevaPelicula.fecha_estreno}
          onChange={handleChange}
          required
        />
        <textarea
          name="sinopsis"
          placeholder="Sinopsis"
          value={nuevaPelicula.sinopsis}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="poster_url"
          placeholder="URL del Póster"
          value={nuevaPelicula.poster_url}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrar Película</button>
      </form>
    </div>
  );
};

export default RegistrarPeliculas;
