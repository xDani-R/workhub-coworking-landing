const validateReserva = (req, res, next) => {
    const { fecha, hora, mensaje, usuario, espacio, sala } = req.body;
    if (!fecha || !hora || !mensaje || !usuario || !espacio || !sala) {
        return res.status(400).json({
            success: false,
            message: 'Faltan campos obligatorios: fecha, hora, mensaje, usuario, espacio, sala'
        });
    }

    next();
};

module.exports = validateReserva;