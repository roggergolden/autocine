import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Peliculas from './pages/Peliculas/Peliculas';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import ResumenPedido from './pages/ResumenPedido';
import IniciarSesion from './pages/IniciarSesion';
import RegistroUsuario from './pages/RegistroUsuario';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SeleccionarFuncion from './components/Funciones/SeleccionarFuncion';

import { CarritoProvider } from './context/CarritoContext';  // Proveedor del contexto del carrito
import { AuthProvider } from './context/AuthContext';        // Proveedor del contexto de autenticación

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />  {/* Página de inicio con lista de películas */}
            
            {/* Ruta para ver los estrenos con la lista de películas */}
            <Route path="/peliculas" element={<Peliculas />} />
            
            {/* Ruta para ver detalles de una película específica */}
            <Route path="/peliculas/:id_pelicula" element={<SeleccionarFuncion />} />
                        
            
            {/* Ruta para ver los productos */}
            <Route path="/productos" element={<Productos />} />
            
            {/* Ruta para el carrito de compras */}
            <Route path="/carrito" element={<Carrito />} />
            
            {/* Ruta para el resumen del pedido */}
            <Route path="/resumen-pedido" element={<ResumenPedido />} />
            
            {/* Rutas de autenticación */}
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/registro" element={<RegistroUsuario />} />
          </Routes>
          <Footer />
        </Router>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;
