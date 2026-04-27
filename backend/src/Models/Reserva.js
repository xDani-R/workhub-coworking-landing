const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: [true, 'La reserva debe tener un usuario']
  },
  espacio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Espacio',
    required: [true, 'La reserva debe tener un espacio']
  },
  salaId: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: [true, 'La fecha es obligatoria']
  },
  horaInicio: {
    type: String,
    required: true
  },
  horaFin: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'confirmada', 'cancelada'],
    default: 'pendiente'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// ✅ UPDATED PRE-SAVE HOOK (No 'next' required)
reservaSchema.pre('save', function() {
  // Mongoose automatically handles thrown errors in hooks
  if (this.horaFin <= this.horaInicio) {
    throw new Error('La hora de fin debe ser posterior a la hora de inicio');
  }
  // No need to call next() if you don't include it in the arguments
});

module.exports = mongoose.model('Reserva', reservaSchema);