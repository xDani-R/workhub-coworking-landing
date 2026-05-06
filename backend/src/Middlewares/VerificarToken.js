const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    // El header debe venir como: Authorization: Bearer <token>
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = payload; // disponible en el controller como req.usuario
        next();
    } catch (error) {
        return res.status(403).json({ mensaje: 'Token inválido o expirado.' });
    }
};

module.exports = verificarToken;