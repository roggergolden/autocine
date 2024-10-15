import React, { useEffect, useState } from 'react';
import { Button, Typography, Grid2, Card, CardContent, CardMedia, IconButton, MenuItem, Select, FormControl, InputLabel, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Movie1 from '../../assets/avengers.jpg';  
import Movie2 from '../../assets/guardianes.jpg';
import Movie3 from '../../assets/iron.jpg';
import Movie4 from '../../assets/doctor.jpg';
import Movie5 from '../../assets/spider.jpg';
import Movie6 from '../../assets/wakanda.jpg';
import Movie7 from '../../assets/thor.jpg';
import Movie8 from '../../assets/matrix.jpg';
import Movie9 from '../../assets/starwars.jpg';
import Movie10 from '../../assets/avatar.jpg';
import HeroImage from '../../assets/venon2.jpg';
import usePeliculas from '../../hooks/usePeliculas';
import useFunciones from '../../hooks/useFunciones';
import './Home.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImage})`,
        height: '600px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        marginBottom: '40px'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        <Link to="/peliculas">
          <Button variant="contained" color="primary" size="large">
            Ver Películas
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  const { peliculas, obtenerPeliculas } = usePeliculas();
  const { funciones, obtenerFunciones } = useFunciones(); 
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedDate, setSelectedDate] = useState(null); 
  const [filteredMovies, setFilteredMovies] = useState([]); 

  const images = [Movie1, Movie2, Movie3, Movie4, Movie5, Movie6, Movie7, Movie8, Movie9, Movie10];

  useEffect(() => {
    obtenerPeliculas(); 
    obtenerFunciones(); 
  }, []);

  useEffect(() => {
    const filterMoviesByDateAndMovie = () => {
      if (!selectedDate && !selectedMovie) {
        setFilteredMovies(peliculas);
      } else {
        const filtered = peliculas.filter((pelicula) => {
          const funcionesDePelicula = funciones.filter(
            (funcion) =>
              funcion.id_pelicula === pelicula.id_pelicula &&
              (!selectedDate || new Date(funcion.fecha_funcion).toLocaleDateString() === new Date(selectedDate).toLocaleDateString())
          );
          return funcionesDePelicula.length > 0;
        });
        setFilteredMovies(filtered);
      }
    };
    filterMoviesByDateAndMovie();
  }, [peliculas, funciones, selectedMovie, selectedDate]);

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate); 
  };

  return (
    <div className="home-container">
      <Hero />

      <div className="filter-container">
        <FormControl variant="outlined" style={{ minWidth: 200 }}>
          <InputLabel>Seleccionar Película</InputLabel>
          <Select value={selectedMovie} onChange={handleMovieChange} label="Seleccionar Película">
            {peliculas.map((pelicula) => (
              <MenuItem key={pelicula.id_pelicula} value={pelicula.id_pelicula}>
                {pelicula.titulo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Seleccionar Fecha"
            value={selectedDate}
            onChange={handleDateChange}
            slots={{ textField: (props) => <TextField {...props} /> }}
          />
        </LocalizationProvider>
      </div>


      <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: '20px' }}>
        Películas Disponibles
      </Typography>

      <Grid2 container spacing={4} justifyContent="center">
        {filteredMovies.map((movie, index) => (
          <Grid2 item xs={12} sm={6} md={3} lg={3} key={movie.id_pelicula || index}>
            <Card sx={{ backgroundColor: '#292929' }} elevation={3} className="movie-card">
  <Link to={`/peliculas/${movie.id_pelicula}`} className="no-decoration-link" state={{ image: images[index % images.length] }}>
    <CardMedia
      component="img"
      height="300"
      image={images[index % images.length]} 
      alt={movie.titulo}
      className="movie-poster"
    />
    <CardContent>
      <Typography variant="h5" align="center" gutterBottom>
        {movie.titulo}
      </Typography>
      <Typography variant="body1" align="center" color="textsPrimary" gutterBottom>
        Director: {movie.director}
      </Typography>
      <Typography variant="body1" align="center" color="textsPrimary" gutterBottom>
        Duración: {movie.duracion} min
      </Typography>
      <Typography variant="body1" align="center" color="textsPrimary" gutterBottom>
        Fecha de Estreno: {new Date(movie.fecha_estreno).toLocaleDateString()}
      </Typography>
    </CardContent>
  </Link>
</Card>

          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default Home;
