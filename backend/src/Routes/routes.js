const express = require('express');
const router = express.Router();
const Controllers = require('../Controllers/Controllers');

// Dani - (POST) para crear nuevas reservas
router.post('/reservas', Controllers.createReserva);

// Dani - (PUT) para actualizar reservas
router.put('/reservas/:id', Controllers.updateReserva);

module.exports = router;
