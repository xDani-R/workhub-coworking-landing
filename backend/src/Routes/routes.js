const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/controllers');
const validateReserva = require('../Middlewares/validateReserva');

// ── GET /espacios/ ───────────────────────────────────────
router.get('/espacios', Controllers.getEspacios);

// ── POST /reservas ─────────────────────────────────────────────
router.post('/reservas', validateReserva, Controllers.createReserva);

// ── PUT /reservas/:id ──────────────────────────────────────────
router.put('/reservas/:id', validateReserva, Controllers.updateReserva);

// ── DELETE /reservas/:id ───────────────────────────────────────
router.delete('/reservas/:id', Controllers.deleteReserva);

// ── GET /reservas/ ───────────────────────────────────────
router.get('/reservas', Controllers.getReservas);

module.exports = router;