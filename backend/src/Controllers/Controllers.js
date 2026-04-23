const Models = require('../models/models');

const Controllers = {

    // ── GET /espacios/ ──────────────────────────────────────────────────
    getEspacios: (req, res) => {
        const data = Models.findAll();
        // Respondemos con el código 200 y los datos en JSON
        res.status(200).json(data); 
    },

    // ── POST /reservas ────────────────────────────────────────────────────────
    createReserva: (req, res) => {
        try {
            const reservas = Models.getReservas();

            const nuevaReserva = {
                id: Date.now(),
                ...req.body
            };

            reservas.push(nuevaReserva);
            Models.saveReservas(reservas);

            return res.status(201).json({
                success: true,
                message: 'Reserva creada exitosamente',
                data: nuevaReserva
            });

        } catch (error) {
            console.error('Error en createReserva:', error);
            return res.status(500).json({
                success: false,
                message: 'Error interno del servidor al crear la reserva'
            });
        }
    },

    // ── PUT /reservas/:id ─────────────────────────────────────────────────────
    updateReserva: (req, res) => {
        try {
            const { id } = req.params;
            const reservas = Models.getReservas();

            const index = reservas.findIndex(r => r.id == id);

            if (index === -1) {
                return res.status(404).json({
                    success: false,
                    message: `No se encontró la reserva con el ID: ${id}`
                });
            }

            reservas[index] = { ...reservas[index], ...req.body };
            Models.saveReservas(reservas);

            return res.status(200).json({
                success: true,
                message: 'Reserva actualizada exitosamente',
                data: reservas[index]
            });

        } catch (error) {
            console.error('Error en updateReserva:', error);
            return res.status(500).json({
                success: false,
                message: 'Error interno del servidor al actualizar la reserva'
            });
        }
    },

    // ── DELETE /reservas/:id ──────────────────────────────────────────────────
    deleteReserva: async (req, res) => {
        try {
            const { id } = req.params;

            const deleted = await Models.deleteReservation(id);

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
};

module.exports = Controllers;