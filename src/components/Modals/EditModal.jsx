import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const EditModal = ({ open, handleClose, item, onSave }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (e) => {
    setEditedItem({
      ...editedItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(editedItem);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-content">
        <h2>Editar {item.titulo || item.nombre}</h2>
        <TextField
          name="titulo"
          label="Título"
          value={editedItem.titulo || editedItem.nombre}
          onChange={handleChange}
          fullWidth
        />
        {/* Puedes agregar más campos aquí, dependiendo si es película o producto */}
        <Button onClick={handleSave}>Guardar</Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
