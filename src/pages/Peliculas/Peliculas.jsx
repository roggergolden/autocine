import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Importar Link para la navegación
import Movie1 from '../../assets/avengers.jpg';  // Importa las imágenes desde tu carpeta assets
import Movie2 from '../../assets/guardianes.jpg';
import Movie3 from '../../assets/iron.jpg';
import Movie4 from '../../assets/doctor.jpg';
import Movie5 from '../../assets/spider.jpg';
import Movie6 from '../../assets/wakanda.jpg';
import Movie7 from '../../assets/thor.jpg';
import Movie8 from '../../assets/matrix.jpg';
import Movie9 from '../../assets/starwars.jpg';
import Movie10 from '../../assets/avatar.jpg';
import './Premieres.css';  // Archivo de estilos personalizados

function Premieres() {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);

  // Obtener las películas desde el backend
  useEffect(() => {
    axios.get('http://localhost:8082/apiRest/peliculas/obtener')
      .then(response => {
        setPeliculas(response.data);
        setPeliculasFiltradas(response.data);  // Al inicio mostramos todas las películas
      })
      .catch(error => {
        console.error('Error al obtener las películas:', error);
      });
  }, []);

  // Filtrar las películas según el término de búsqueda
  useEffect(() => {
    const resultados = peliculas.filter(pelicula =>
      pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );
    setPeliculasFiltradas(resultados);
  }, [busqueda, peliculas]);

  // Manejar el cambio en el input de búsqueda
  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);  // Actualizar el estado de búsqueda
  };

  // Array de imágenes importadas
  const images = [Movie1, Movie2, Movie3, Movie4, Movie5, Movie6, Movie7, Movie8, Movie9, Movie10];

  return (
    <div className="premieres-container">
      <h1>Películas en Estreno</h1>
      
      {/* Input para buscar películas */}
      <input
        type="text"
        placeholder="Buscar película por nombre..."
        value={busqueda}
        onChange={handleBusquedaChange}  // Ejecutar la función al cambiar el valor
        className="search-input"
      />

      <div className="movies-grid">
        {peliculasFiltradas.length > 0 ? (
          peliculasFiltradas.map((pelicula, index) => (
            <Link 
              to={`/peliculas/${pelicula.id_pelicula}`}  // Enlazar a la página de selección de función
              state={{ image: images[index % images.length] }}  // Pasar la imagen como estado
              key={pelicula.id_pelicula} 
              className="no-decoration-link"
            >
              <div className="movie-card">
                <img
                  src={images[index % images.length]}  // Asignar la imagen según el índice
                  alt={pelicula.titulo}
                  className="movie-poster"
                />
                <div className="movie-details">
                  <h2>{pelicula.titulo}</h2>
                  <p>{pelicula.sinopsis.substring(0, 100)}...</p>
                  <p>Director: {pelicula.director}</p>
                  <p>Fecha de Estreno: {new Date(pelicula.fecha_estreno).toLocaleDateString()}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No se encontraron películas con ese título.</p>
        )}
      </div>
    </div>
  );
}

export default Premieres;
