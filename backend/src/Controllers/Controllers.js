const Models = require('../Models/Models');

const Controllers = {
    // Crear una nueva reserva (POST /reservas)
    createReserva: (req, res) => {
        const reservas = Models.getReservas();
        const nuevaReserva = {
            id: Date.now(), // ID único basado en la marca de tiempo
            ...req.body // Asumiendo que el cuerpo de la solicitud contiene los datos de la reserva
        };
        reservas.push(nuevaReserva);
        Models.saveReservas(reservas);
        res.status(201).json({ message: 'Reserva creada exitosamente', reserva: nuevaReserva });
    },

    // Actualizar una reserva existente (PUT /reservas/:id)
    updateReserva: (req, res) => {
        const { id } = req.params;
        let reservas = Models.getReservas();
        const index = reservas.findIndex(r => r.id == id);
        if (index !== -1) {
            reservas[index] = { ...reservas[index], ...req.body }; // Actualiza la reserva con los nuevos datos
            Models.saveReservas(reservas);
            res.json({ message: 'Reserva actualizada exitosamente', reserva: reservas[index] });
        } else {
            res.status(404).json({ message: 'Reserva no encontrada' });
        }
    }
};

module.exports = Controllers;