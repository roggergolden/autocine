import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'; 
import { Button, Typography, Box } from '@mui/material';
import usePeliculas from '../../hooks/usePeliculas'; 
import useFunciones from '../../hooks/useFunciones'; 
import AutoSeatSelector from '../AutoSeatSelector/AutoSeatSelector'; // Importar el selector de autos

const SeleccionarFuncion = () => {
  const { id_pelicula } = useParams(); 
  const { state } = useLocation(); 
  const { peliculas, obtenerPeliculas } = usePeliculas(); 
  const { funciones, obtenerFunciones } = useFunciones(); 
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [funcionesFiltradas, setFuncionesFiltradas] = useState([]);
  const [mostrarSelectorAsientos, setMostrarSelectorAsientos] = useState(false); // Nuevo estado para mostrar el selector
  const [funcionSeleccionada, setFuncionSeleccionada] = useState(null); // Para almacenar la función seleccionada
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerPeliculas(); 
    obtenerFunciones(); 
  }, []);

  useEffect(() => {
    const pelicula = peliculas.find(p => p.id_pelicula === parseInt(id_pelicula));
    setPeliculaSeleccionada(pelicula);

    const funcionesRelacionadas = funciones.filter(funcion => funcion.id_pelicula === parseInt(id_pelicula));
    setFuncionesFiltradas(funcionesRelacionadas);
  }, [peliculas, funciones, id_pelicula]);

  if (error) {
    return <p>{error}</p>;
  }

  // Función para manejar la compra de tickets y mostrar el selector de autos
  const handleComprarTickets = (funcion) => {
    setFuncionSeleccionada(funcion);
    setMostrarSelectorAsientos(true); // Mostrar el selector de asientos
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {peliculaSeleccionada && (
        <>
          <Typography variant="h2" gutterBottom>
            {peliculaSeleccionada.titulo}
          </Typography>
          
          {state?.image && (
            <Box display="flex" justifyContent="center" my={4}>
              <img
                src={state.image}
                alt="Poster de la película"
                style={{ width: '400px', height: 'auto', borderRadius: '8px' }}
              />
            </Box>
          )}

          <Typography variant="h5" gutterBottom><strong>Director:</strong> {peliculaSeleccionada.director}</Typography>
          <Typography variant="h6" gutterBottom><strong>Duración:</strong> {peliculaSeleccionada.duracion} min</Typography>
          <Typography variant="h6" gutterBottom><strong>Fecha de estreno:</strong> {new Date(peliculaSeleccionada.fecha_estreno).toLocaleDateString()}</Typography>
          <Typography variant="h6" gutterBottom><strong>Sinopsis:</strong> {peliculaSeleccionada.sinopsis}</Typography>
        </>
      )}

      <Typography variant="h3" gutterBottom>Funciones Disponibles</Typography>
      {funcionesFiltradas.length > 0 ? (
        funcionesFiltradas.map((funcion) => (
          <Box key={funcion.id_funcion} my={3} p={2} border={1} borderColor="grey.400" borderRadius="8px" textAlign="left" maxWidth="600px" margin="0 auto">
            <Typography variant="body1"><strong>Fecha:</strong> {new Date(funcion.fecha_funcion).toLocaleDateString()}</Typography>
            <Typography variant="body1"><strong>Hora de inicio:</strong> {funcion.hora_inicio}</Typography>
            <Typography variant="body1"><strong>Hora de fin:</strong> {funcion.hora_fin}</Typography>
            <Typography variant="body1"><strong>Capacidad de autos:</strong> {funcion.capacidad_autos}</Typography>
            <Typography variant="body1"><strong>Precio:</strong> S/. {funcion.precio}</Typography>

            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '10px' }}
              onClick={() => handleComprarTickets(funcion)} // Ahora activamos el selector de autos
            >
              Comprar Tickets
            </Button>
          </Box>
        ))
      ) : (
        <Typography variant="body1">No hay funciones disponibles para esta película.</Typography>
      )}

      {/* Mostrar el selector de autos si se ha presionado el botón "Comprar Tickets" */}
      {mostrarSelectorAsientos && (
        <AutoSeatSelector id_funcion={funcionSeleccionada.id_funcion} capacidadAutos={funcionSeleccionada.capacidad_autos} />
      )}
    </div>
  );
};

export default SeleccionarFuncion;
