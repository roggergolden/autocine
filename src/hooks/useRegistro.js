import axios from 'axios';

const useRegistro = () => {
  const registrarUsuario = async (datosUsuario) => {
    try {
      await axios.post('http://localhost:8082/apiRest/usuarios/registrar', datosUsuario);
      alert('Usuario registrado con éxito');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Hubo un error al registrar el usuario');
    }
  };

  return { registrarUsuario };
};

export default useRegistro;
