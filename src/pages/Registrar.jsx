import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrarPelicula from '../components/Registros/RegistrarPelicula';
import RegistrarProducto from '../components/Registros/RegistrarProducto';
import PeliculaCard from '../components/Peliculas/PeliculaCard';
import ProductoCard from '../components/Productos/ProductoCard';
import EditModal from '../components/Modals/EditModal';
import './Registrar.css';

// Importar imágenes locales
import Movie1 from '../assets/avengers.jpg';
import Movie2 from '../assets/guardianes.jpg';
import Movie3 from '../assets/iron.jpg';
import Movie4 from '../assets/doctor.jpg';
import Movie5 from '../assets/spider.jpg';
import Movie6 from '../assets/wakanda.jpg';
import Movie7 from '../assets/thor.jpg';
import Movie8 from '../assets/matrix.jpg';
import Movie9 from '../assets/starwars.jpg';
import Movie10 from '../assets/avatar.jpg';

const Registrar = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [productos, setProductos] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Obtener películas desde la API
  useEffect(() => {
    axios.get('http://localhost:8082/apiRest/peliculas/obtener')
      .then(response => setPeliculas(response.data))
      .catch(error => console.error('Error al obtener las películas:', error));
  }, []);

  // Obtener productos desde la API
  useEffect(() => {
    axios.get('http://localhost:8082/apiRest/productos/obtener')
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error al obtener los productos:', error));
  }, []);

  // Asignar imágenes locales a las películas
  const movieImages = [
    Movie1, Movie2, Movie3, Movie4, Movie5,
    Movie6, Movie7, Movie8, Movie9, Movie10
  ];

  // Función para eliminar película
  const handleDeletePelicula = (id) => {
    axios.delete(`http://localhost:8082/apiRest/peliculas/eliminar/${id}`)
      .then(() => setPeliculas(peliculas.filter(pelicula => pelicula.id_pelicula !== id)))
      .catch(error => console.error('Error al eliminar la película:', error));
  };

  // Función para eliminar producto
  const handleDeleteProducto = (id) => {
    axios.delete(`http://localhost:8082/apiRest/productos/eliminar/${id}`)
      .then(() => setProductos(productos.filter(producto => producto.id_producto !== id)))
      .catch(error => console.error('Error al eliminar el producto:', error));
  };

  // Función para abrir el modal de edición
  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Función para guardar los cambios de edición
  const handleSaveEdit = (editedItem) => {
    const updateUrl = editedItem.titulo
      ? `http://localhost:8082/apiRest/peliculas/actualizar/${editedItem.id_pelicula}`
      : `http://localhost:8082/apiRest/productos/actualizar/${editedItem.id_producto}`;

    axios.put(updateUrl, editedItem)
      .then(() => {
        if (editedItem.titulo) {
          setPeliculas(peliculas.map(p => p.id_pelicula === editedItem.id_pelicula ? editedItem : p));
        } else {
          setProductos(productos.map(p => p.id_producto === editedItem.id_producto ? editedItem : p));
        }
      })
      .catch(error => console.error('Error al actualizar:', error));
  };

  return (
    <div className="registrar-container">
      <h1>Registrar Nuevas Películas y Productos</h1>

      {/* Sección de Películas */}
      <div className="section peliculas-section">
        <h2 style={{ color: '#ff3d00' }}>Registrar Nueva Película</h2>
        <RegistrarPelicula />

        <h3>Películas Registradas</h3>
        <div className="cards-container">
          {peliculas.map((pelicula, index) => (
            <PeliculaCard
              key={pelicula.id_pelicula}
              pelicula={pelicula}
              image={movieImages[index % movieImages.length]} // Asignar imagen correspondiente
              onEdit={handleEdit}
              onDelete={handleDeletePelicula}
            />
          ))}
        </div>
      </div>

      {/* Sección de Productos */}
      <div className="section productos-section">
        <h2>Registrar Nuevo Producto</h2>
        <RegistrarProducto />

        <h3>Productos Registrados</h3>
        <div className="cards-container">
          {productos.map((producto) => (
            <ProductoCard
              key={producto.id_producto}
              producto={producto}
              onEdit={handleEdit}
              onDelete={handleDeleteProducto}
            />
          ))}
        </div>
      </div>

      {/* Modal para editar películas o productos */}
      {isModalOpen && (
        <EditModal
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          item={selectedItem}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default Registrar;
