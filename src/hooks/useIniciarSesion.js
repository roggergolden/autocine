import axios from 'axios';

const useIniciarSesion = () => {
  const iniciarSesion = async (datosUsuario) => {
    try {
      await axios.post('http://localhost:8082/apiRest/usuarios/login', datosUsuario);
      alert('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error en las credenciales');
    }
  };

  return { iniciarSesion };
};

export default useIniciarSesion;
