const Models = require('../models/models');

const Controllers = {
    // ── DELETE /reservas/:id ──────────────────────────────────────────────────
    deleteReserva: async (req, res) => {
        try {
            const { id } = req.params;

            // Use Mongoose to find and delete by ID
            const deleted = await Models.Reserva.findByIdAndDelete(id);

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