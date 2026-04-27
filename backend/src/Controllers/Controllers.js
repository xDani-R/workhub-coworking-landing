const Reserva = require('../Models/Reserva');

const deleteReservationController = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Ahora usas Mongoose en lugar de leer JSON
    const deletedReserva = await Reserva.findByIdAndDelete(id);

    if (!deletedReserva) {
      return res.status(404).json({
        success: false,
        message: `No se encontró la reserva con el ID: ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Reserva eliminada exitosamente',
      data: deletedReserva
    });
  } catch (error) {
    console.error('Error en Controller:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
};

module.exports = { deleteReservationController };