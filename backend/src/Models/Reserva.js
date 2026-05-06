const mongoose = require('mongoose');

const reservaSchema = mongoose.Schema({
    fecha: {type: String, required: true},
    hora: {type: String, required: true},
    mensaje: {type: String, required: true},
    usuarios: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true},
    espacios: {type: mongoose.Schema.Types.ObjectId, ref: 'Espacio', required: true},
    salas: {type: mongoose.Schema.Types.ObjectId, required: true}
})

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;


