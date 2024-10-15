import React, { useContext } from 'react';
import CarritoContext from '../context/CarritoContext';
import { Button, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Carrito.css';

const Carrito = () => {
  const { carrito, total, eliminarDelCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  return (
    <div className="carrito-container">
      <Typography variant="h4" align="center" gutterBottom>Carrito de Compras</Typography>
      <List>
        {carrito.map((item, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText
                primary={item.nombre}
                secondary={`Cantidad: ${item.cantidad} - Precio: S/.${item.precio}`}
              />
              <Button color="secondary" onClick={() => eliminarDelCarrito(index)}>Eliminar</Button>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <Typography variant="h5" align="right" gutterBottom>Total: S/.{total}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/resumen-pedido')}
      >
        Continuar al Pago
      </Button>
    </div>
  );
};

export default Carrito;
