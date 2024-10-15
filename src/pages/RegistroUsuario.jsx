import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import useRegistro from '../hooks/useRegistro';


const RegistroUsuario = () => {
  const { registrarUsuario } = useRegistro();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registrarUsuario(formData);
  };

  return (
    <Container className="registro-container">
      <Typography variant="h4" align="center" gutterBottom>Registrar Usuario</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          fullWidth
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          margin="normal"
        />
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
          Registrar
        </Button>
      </form>
    </Container>
  );
};

export default RegistroUsuario;
