const salaSchema = new mongoose.Schema({
    nombre:     { type: String, required: true },
    precio:     { type: String },
    tipo:       { type: String, enum: ['compartida', 'taller', 'privada'] },
    amenidades: [String]
});

const espacioSchema = new mongoose.Schema({
    nombre:    { type: String, required: true },
    direccion: { type: String },
    salas:     [salaSchema]
});

module.exports = mongoose.model('Espacio', espacioSchema);