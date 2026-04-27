const mongoose = require('mongoose');

const espacioSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  direccion: String,
  salas: [{
    id: String,
    nombre: String,
    precio: String,
    imagen: String,
    tipo: {
      type: String,
      enum: ['compartida', 'taller', 'privada']
    },
    amenidades: [String]
  }]
});

module.exports = mongoose.model('Espacio', espacioSchema);