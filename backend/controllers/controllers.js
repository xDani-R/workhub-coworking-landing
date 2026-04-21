// 1. Importamos la función lógica del archivo models.js
// Asegúrate de que la ruta '../models/models' sea correcta según tu estructura
const { deleteReservation } = require('../models/models');

/**
 * Controlador para eliminar una reserva
 */
const deleteReservationController = async (req, res) => {
    try {
        // 2. Extraemos el ID de los parámetros de la URL (ej: /reservas/123)
        const { id } = req.params;

        // 3. Llamamos a la función del model pasando el ID
        const deletedReserva = await deleteReservation(id);

        // 4. Lógica de respuesta según el resultado del model
        if (!deletedReserva) {
            // Si el model retornó null (no encontró el ID)
            return res.status(404).json({
                success: false,
                message: `No se encontró la reserva con el ID: ${id}`
            });
        }

        // Si se eliminó con éxito
        return res.status(200).json({
            success: true,
            message: 'Reserva eliminada exitosamente',
            data: deletedReserva // Opcional: devolvemos lo que borraste para confirmar
        });

    } catch (error) {
        // 5. Manejo de errores inesperados
        console.error('Error en Controller:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno del servidor al eliminar la reserva'
        });
    }
};

// 6. Exportamos la función para usarla en routes.js
module.exports = { deleteReservationController };