const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/controllers');
const validateReserva = require('../Middlewares/validateReserva');

// ── DELETE /reservas/:id ───────────────────────────────────────
router.delete('/reservas/:id', Controllers.deleteReserva);


module.exports = router;