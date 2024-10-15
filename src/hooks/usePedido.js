import { useState } from 'react';
import pedidosService from '../services/pedidosService';

const usePedido = () => {
  const [pedido, setPedido] = useState(null);

  const crearPedido = async (nuevoPedido) => {
    try {
      const response = await pedidosService.crearPedido(nuevoPedido);
      setPedido(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al crear pedido:', error);
    }
  };

  const obtenerPedido = async (id) => {
    try {
      const response = await pedidosService.obtenerPedido(id);
      setPedido(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al obtener pedido:', error);
    }
  };

  return { pedido, crearPedido, obtenerPedido };
};

export default usePedido;
