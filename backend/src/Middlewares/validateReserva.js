const validateReserva = (req, res, next) => {
    const { fecha, hora, mensaje, usuarios, espacios, salas } = req.body;
    if (!fecha || !hora || !mensaje || !usuarios || !espacios || !salas) {
        return res.status(400).json({
            success: false,
            message: 'Faltan campos obligatorios: fecha, hora, mensaje, usuarios, espacios, sala'
        });
    }

    next();
};

module.exports = validateReserva;