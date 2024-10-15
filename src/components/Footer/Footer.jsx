import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './Footer.css'; // Importa los estilos personalizados

const Footer = () => {
  return (
    <Box
      className="footer"
      sx={{
        backgroundColor: '#1c1c1c',  // Sobrescribir el color de fondo
        color: '#ffffff',  // Sobrescribir el color del texto
        p: 2,
        position: 'relative',  // Asegura que no se superponga
        bottom: 0,
        width: '100%',
        mt: 5,  // Añadir margen superior para separar contenido
      }}
    >
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} AutoCine. Todos los derechos reservados.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
        <Link href="https://facebook.com" color="inherit" className="social-link" target="_blank">Facebook</Link>
        <Link href="https://twitter.com" color="inherit" className="social-link" target="_blank">Twitter</Link>
        <Link href="https://instagram.com" color="inherit" className="social-link" target="_blank">Instagram</Link>
      </Box>
    </Box>
  );
};

export default Footer;
