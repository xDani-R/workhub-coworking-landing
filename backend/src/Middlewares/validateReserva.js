const validateReserva = (req, res, next) => {
    const { nombre, telefono, sede, fecha, hora, mensaje } = req.body;

    if (!nombre || !telefono || !sede || !fecha || !hora || !mensaje) {
        return res.status(400).json({
            success: false,
            message: 'Faltan campos obligatorios:  nombre, telefono, sede, fecha, hora, mensaje'
        });
    }

    next();
};

module.exports = validateReserva;