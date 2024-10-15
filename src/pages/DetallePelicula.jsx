import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, CardMedia } from '@mui/material';

const DetallePelicula = () => {
  const location = useLocation();
  const { image } = location.state || {}; // Recuperar la imagen pasada desde el estado

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Detalle de la Película
      </Typography>
      {image && (
        <CardMedia
          component="img"
          height="500"
          image={image} // Mostrar la imagen pasada
          alt="Poster de la película"
        />
      )}
      {/* Aquí puedes agregar más detalles de la película, como funciones disponibles */}
    </div>
  );
};

export default DetallePelicula;
