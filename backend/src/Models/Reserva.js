const mongoose = require('mongoose');

const reservaSchema = mongoose.Schema({
    fecha: {type: String, required: true},
    hora: {type: String, required: true},
    mensaje: {type: String, required: true},
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true},
    espacio: {type: mongoose.Schema.Types.ObjectId, ref: 'Espacio', required: true},
    sala: {type: mongoose.Schema.Types.ObjectId, required: true}
})

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;


