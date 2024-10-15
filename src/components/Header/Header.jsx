import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa los estilos personalizados

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#1c1c1c',  // Sobrescribir el color de fondo del AppBar
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          <Link to="/" className="logo-link">AutoCine</Link>
        </Typography>
        <Box>
          <Button color="inherit">
            <Link to="/" className="nav-link">Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/peliculas" className="nav-link">Películas</Link>
          </Button>
          <Button color="inherit">
            <Link to="/productos" className="nav-link">Productos</Link>
          </Button>
          <Button color="inherit">
            <Link to="/carrito" className="nav-link">Carrito</Link>
          </Button>
          <Button color="inherit">
            <Link to="/iniciar-sesion" className="nav-link">Iniciar Sesión</Link>
          </Button>
          <Button color="inherit">
            <Link to="/registro" className="nav-link">Registrarse</Link>
          </Button>

          {/* Agregando la opción para "Registrar" productos y películas */}
          <Button color="inherit">
            <Link to="/registrar" className="nav-link">Registrar</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
