const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/controllers');

// ── GET /espacios/ ───────────────────────────────────────
router.get('/espacios', Controllers.getEspacios);

// ── POST /reservas ─────────────────────────────────────────────
router.post('/reservas', Controllers.createReserva);

// ── PUT /reservas/:id ──────────────────────────────────────────
router.put('/reservas/:id', Controllers.updateReserva);

// ── DELETE /reservas/:id ───────────────────────────────────────
router.delete('/reservas/:id', Controllers.deleteReserva);

// ── GET /reservas/ ───────────────────────────────────────
router.get('/reservas', Controllers.getReservas);

module.exports = router;