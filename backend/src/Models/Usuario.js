const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    rut: {type: String, required: true},
    nombre: {type: String, required: true},
    correo: {type: String, required: true},
    contrasena: {type: String, required: true}
})

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;


