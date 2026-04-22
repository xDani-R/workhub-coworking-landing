const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/controllers');

// ── POST /reservas ─────────────────────────────────────────────
router.post('/reservas', Controllers.createReserva);

// ── PUT /reservas/:id ──────────────────────────────────────────
router.put('/reservas/:id', Controllers.updateReserva);

// ── DELETE /reservas/:id ───────────────────────────────────────
router.delete('/reservas/:id', Controllers.deleteReserva);

module.exports = router;