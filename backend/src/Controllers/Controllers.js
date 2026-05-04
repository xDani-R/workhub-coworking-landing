const Models = require('../models/models');
const Reserva = require('../Models/Reserva');
const Espacio = require('../Models/Espacio');

const ControllersReservas = {

    // ── POST /reservas ────────────────────────────────────────────────────────
    createReserva: async (req, res) => {
        try {
            const reserva = new Reserva(req.body);
            const reservaCreada = reserva.save();   
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
            const data = await Reserva.find();
            // Respondemos con el código 200 y los datos en JSON
            res.status(201).json(data); 
        } catch (error) {
            res.status(500).json({mensaje: 'Error al intentar listar las reservas', error: error.message}); 
        }
    },
};

const ControllersEspacios = {
    // ── GET /espacios/ ──────────────────────────────────────────────────
    getEspacios: (req, res) => {
        const data = Models.getEspacios();
        // Respondemos con el código 200 y los datos en JSON
        res.status(200).json(data); 
    },

    crearEspacios: async (req, res) => {
        try {
            // Acepta tanto un array como un objeto con clave "espacios"
            const datos = Array.isArray(req.body) ? req.body : req.body.espacios;
            
            const espacios = await Espacio.insertMany(datos);
            res.status(201).json(espacios);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

const ControllersUsuarios = {

};

module.exports = {ControllersReservas, ControllersEspacios, ControllersUsuarios};