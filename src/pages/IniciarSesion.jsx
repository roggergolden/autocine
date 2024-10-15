import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import useIniciarSesion from '../hooks/useIniciarSesion';


const IniciarSesion = () => {
  const { iniciarSesion } = useIniciarSesion();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    iniciarSesion(formData);
  };

  return (
    <Container className="iniciar-sesion-container">
      <Typography variant="h4" align="center" gutterBottom>Iniciar Sesión</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Iniciar Sesión
        </Button>
      </form>
    </Container>
  );
};

export default IniciarSesion;
