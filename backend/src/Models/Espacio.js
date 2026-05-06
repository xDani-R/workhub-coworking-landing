const mongoose = require('mongoose');

const salaSchema = new mongoose.Schema({
    nombre:     { type: String, required: true },
    precio:     { type: String },
    imagen:     { type: String },
    tipo:       { type: String, enum: ['compartida', 'taller', 'privada'] },
    amenidades: [String]
});

const espacioSchema = new mongoose.Schema({
    nombre:    { type: String, required: true },
    direccion: { type: String },
    salas:     [salaSchema]
});

const Espacio = mongoose.model('Espacio', espacioSchema);

module.exports = Espacio;