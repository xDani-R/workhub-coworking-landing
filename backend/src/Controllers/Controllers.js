const Reserva = require('../Models/Reserva');
const Espacio = require('../Models/Espacio');
const Usuario = require('../Models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const ControllersReservas = {

    // ── POST /reservas ────────────────────────────────────────────────────────
    createReserva: async (req, res) => {
        try {
            const reserva = new Reserva(req.body);
            const reservaCreada = await reserva.save();   
            res.status(201).json({mensaje:'Reserva creada exitosamente', reserva: reserva});
        } catch (error) {
            res.status(500).json({mensaje:'Error al crear una reserva', error:error.message});
        }
    },

    // ── PUT /reservas/:id ─────────────────────────────────────────────────────
    updateReserva: async (req, res) => {
        try {
            const reservaActualizada = await Reserva.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
            if (!reservaActualizada){
                return res.status(404).json({mensaje: 'No se ha encontrado la reserva especificada'});
            }
            res.status(201).json({mensaje: 'Reserva actualizada exitosamente', reserva: reservaActualizada});
        } catch (error) {
            res.status(500).json({ mensaje: 'Error al actualizar reserva', error });
        }
    },

    // ── DELETE /reservas/:id ──────────────────────────────────────────────────
    deleteReserva: async (req, res) => {
        try {
            const { id } = req.params;

            // Use Mongoose to find and delete by ID
            const deleted = await Reserva.findByIdAndDelete(id);

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: `No se encontró la reserva con el ID: ${id}`
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Reserva eliminada exitosamente',
                data: deleted
            });

        } catch (error) {
            console.error('Error en deleteReserva:', error);
            return res.status(500).json({
                success: false,
                message: 'Error interno del servidor al eliminar la reserva'
            });
        }
    },

    // ── GET /reservas/ ──────────────────────────────────────────────────
    getReservas: async (req, res) => {
        try {
            const data = await Reserva.find()
            .populate('usuarios', 'nombre correo')
            .populate('espacios', 'nombre direccion salas');
            // Respondemos con el código 200 y los datos en JSON
            res.status(201).json(data); 
        } catch (error) {
            res.status(500).json({mensaje: 'Error al intentar listar las reservas', error: error.message}); 
        }
    },
};

const ControllersEspacios = {
    // ── GET /espacios/ ──────────────────────────────────────────────────
    getEspacios: async (req, res) => {
    try {
        const data = await Espacio.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({mensaje:'Error al intentar listar los espacios', error: error.message})
    }
    },

    crearEspacios: async (req, res) => {
        try {
            // Acepta tanto un array como un objeto con clave "espacios"
            const datos = Array.isArray(req.body) ? req.body : req.body.espacios;
            
            const espacios = await Espacio.insertMany(datos);
            res.status(200).json(espacios);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

const ControllersUsuarios = {
    registrarUsuario : async (req, res) => {
        const { rut, nombre, correo, contrasena } = req.body;
    
        try {
            // 1. Validar que lleguen todos los campos
            if (!rut || !nombre || !correo || !contrasena) {
                return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
            }
    
            // 2. Verificar que el correo no esté ya registrado
            const usuarioExistente = await Usuario.findOne({ correo });
            if (usuarioExistente) {
                return res.status(400).json({ mensaje: 'El correo ya está registrado' });
            }
    
            // 3. Hashear la contraseña antes de guardar
            const salt = await bcrypt.genSalt(10);
            const contrasenaHasheada = await bcrypt.hash(contrasena, salt);
    
            // 4. Crear y guardar el usuario
            const nuevoUsuario = new Usuario({
                rut,
                nombre,
                correo,
                contrasena: contrasenaHasheada,
            });
    
            await nuevoUsuario.save();
    
            // 5. Responder sin exponer la contraseña
            res.status(201).json({
                mensaje: 'Usuario registrado exitosamente',
                usuario: {
                    id: nuevoUsuario._id,
                    rut: nuevoUsuario.rut,
                    nombre: nuevoUsuario.nombre,
                    correo: nuevoUsuario.correo,
                },
            });
    
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    },

    loginUsuario : async (req, res) => {
        const { correo, contrasena } = req.body;
    
        try {
            // 1. Validar que lleguen los campos
            if (!correo || !contrasena) {
                return res.status(400).json({ mensaje: 'Correo y contraseña son obligatorios' });
            }
    
            // 2. Buscar el usuario por correo
            const usuario = await Usuario.findOne({ correo });
            if (!usuario) {
                return res.status(401).json({ mensaje: 'Credenciales inválidas' });
            }
    
            // 3. Comparar la contraseña con el hash guardado
            const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
            if (!contrasenaValida) {
                return res.status(401).json({ mensaje: 'Credenciales inválidas' });
            }
    
            // 4. Generar el token JWT
            const payload = {
                id: usuario._id,
                correo: usuario.correo,
                nombre: usuario.nombre,
            };
    
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' });
    
            // 5. Responder con el token
            res.status(200).json({
                mensaje: 'Login exitoso',
                token,
                usuario: {
                    id: usuario._id,
                    rut: usuario.rut,
                    nombre: usuario.nombre,
                    correo: usuario.correo,
                },
            });
    
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    }
};

module.exports = {ControllersReservas, ControllersEspacios, ControllersUsuarios};