const errorHandler = (err, req, res, next) => {
    console.error('Error no controlado:', err.message);
    res.status(500).json({
        success: false,
        message: 'Error interno del servidor',
        error: err.message
    });
};

module.exports = errorHandler;