import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Grid, IconButton, Box } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CarritoContext from '../../context/CarritoContext'; // Importar el contexto del carrito

const AutoSeatSelector = () => {
  const { id_funcion } = useParams(); // Obtener el ID de la función desde la URL
  const navigate = useNavigate();
  const { agregarAlCarrito } = useContext(CarritoContext); // Usar el contexto para agregar al carrito
  const [autos, setAutos] = useState([
    { id: 1, estado: 'disponible' },
    { id: 2, estado: 'ocupado' },
    { id: 3, estado: 'disponible' },
    { id: 4, estado: 'disponible' },
    { id: 5, estado: 'ocupado' },
    { id: 6, estado: 'disponible' },
    { id: 7, estado: 'disponible' },
    { id: 8, estado: 'ocupado' },
    { id: 9, estado: 'disponible' },
    { id: 10, estado: 'ocupado' },
    { id: 11, estado: 'disponible' },
    { id: 12, estado: 'disponible' },
    { id: 13, estado: 'ocupado' },
    { id: 14, estado: 'disponible' },
    { id: 15, estado: 'ocupado' },
    { id: 16, estado: 'disponible' },
    { id: 17, estado: 'ocupado' },
    { id: 18, estado: 'disponible' },
    { id: 19, estado: 'disponible' },
    { id: 20, estado: 'disponible' },
  ]);

  const manejarSeleccion = (id) => {
    const nuevosAutos = autos.map((auto) => {
      if (auto.id === id && auto.estado === 'disponible') {
        return { ...auto, estado: 'seleccionado' };
      } else if (auto.id === id && auto.estado === 'seleccionado') {
        return { ...auto, estado: 'disponible' };
      }
      return auto;
    });
    setAutos(nuevosAutos);
  };

  const getColorAuto = (estado) => {
    if (estado === 'disponible') return '#28a745'; // Verde para disponible
    if (estado === 'ocupado') return '#dc3545'; // Rojo para ocupado
    if (estado === 'seleccionado') return '#007bff'; // Azul para seleccionado
  };

  // Función para confirmar la selección y agregar los autos al carrito
  const handleConfirmarSeleccion = () => {
    const autosSeleccionados = autos.filter(auto => auto.estado === 'seleccionado');

    // Agregar cada auto seleccionado al carrito
    autosSeleccionados.forEach((auto) => {
      agregarAlCarrito({
        id: auto.id,
        nombre: `Entrada Auto ${auto.id} - Función ${id_funcion}`,
        cantidad: 1,
        precio: 20, // Precio de ejemplo por entrada
      });
    });

    alert(`Selección confirmada. Autos seleccionados: ${autosSeleccionados.map(a => a.id).join(', ')}`);
    
    // Navegar al carrito
    navigate('/carrito');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Selecciona tu lugar para la función {id_funcion}
      </Typography>

      {/* Simulación de una pantalla */}
      <Box
        sx={{
          backgroundColor: '#ccc',
          width: '60%',
          height: '50px',
          margin: '0 auto 20px auto',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h6" color="textSecondary" align="center" sx={{ lineHeight: '50px' }}>
          Pantalla
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        {autos.map((auto) => (
          <Grid item xs={3} key={auto.id} align="center">
            <IconButton
              onClick={() => manejarSeleccion(auto.id)}
              disabled={auto.estado === 'ocupado'}
            >
              <DirectionsCarIcon
                style={{
                  fontSize: '40px',
                  color: getColorAuto(auto.estado),
                }}
              />
            </IconButton>
          </Grid>
        ))}
      </Grid>

      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={handleConfirmarSeleccion}>
          Confirmar Selección
        </Button>
      </Box>
    </div>
  );
};

export default AutoSeatSelector;
