import React, { useContext } from 'react';
import { Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CarritoContext from '../context/CarritoContext'; // Importar el contexto del carrito
import './ResumenPedido.css';

const ResumenPedido = () => {
  const { carrito, total } = useContext(CarritoContext); // Usar el contexto del carrito
  const navigate = useNavigate();

  const confirmarCompra = () => {
    alert('Compra confirmada');
    navigate('/pago-exitoso');
  };

  return (
    <div className="resumen-container">
      <Typography variant="h4" align="center" gutterBottom>Resumen del Pedido</Typography>
      <List>
        {carrito.map((item, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText
                primary={item.nombre}
                secondary={`Cantidad: ${item.cantidad} - Precio: S/.${item.precio}`}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <Typography variant="h5" align="right" gutterBottom>Total: S/.{total}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={confirmarCompra}
        fullWidth
      >
        Confirmar Compra
      </Button>
    </div>
  );
};

export default ResumenPedido;
