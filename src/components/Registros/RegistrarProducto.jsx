import React, { useState } from 'react';
import axios from 'axios';
import './RegistrarProductos.css'; // Estilos personalizados

const RegistrarProductos = () => {
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    tipo_producto: 'comida', // valor por defecto
    stock: '',
    imagen_url: ''
  });
  const [mensaje, setMensaje] = useState(null); // Mensaje de éxito o error

  // Función para manejar cambios en los inputs del formulario
  const handleChange = (e) => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value,
    });
  };

  // Función para enviar el formulario y registrar un nuevo producto
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8082/apiRest/productos/insertar', nuevoProducto)
      .then(response => {
        setMensaje('Producto registrado exitosamente'); // Mensaje de éxito
        setNuevoProducto({
          nombre: '',
          descripcion: '',
          precio: '',
          tipo_producto: 'comida',
          stock: '',
          imagen_url: ''
        });
      })
      .catch(error => {
        setMensaje('Error al registrar producto'); // Mensaje de error
        console.error('Error al registrar producto:', error);
      });
  };

  return (
    <div className="registrar-productos-container">
      <h1>Registrar Nuevo Producto</h1>
      
      {/* Mostrar mensaje de éxito o error */}
      {mensaje && <div className="mensaje">{mensaje}</div>}
      
      <form onSubmit={handleSubmit} className="form-registrar-producto">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del Producto"
          value={nuevoProducto.nombre}
          onChange={handleChange}
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción del Producto"
          value={nuevoProducto.descripcion}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={nuevoProducto.precio}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock disponible"
          value={nuevoProducto.stock}
          onChange={handleChange}
          required
        />
        <select name="tipo_producto" value={nuevoProducto.tipo_producto} onChange={handleChange} required>
          <option value="comida">Comida</option>
          <option value="bebida">Bebida</option>
        </select>
        <input
          type="text"
          name="imagen_url"
          placeholder="URL de la imagen"
          value={nuevoProducto.imagen_url}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrar Producto</button>
      </form>
    </div>
  );
};

export default RegistrarProductos;
