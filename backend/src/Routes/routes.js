const express = require('express');
const router = express.Router();
const { ControllersReservas, ControllersEspacios, ControllersUsuarios } = require('../controllers/controllers');
const validateReserva = require('../Middlewares/validateReserva');
const verificarToken = require('../Middlewares/verificarToken');


// ── GET /espacios/ ───────────────────────────────────────
router.get('/espacios', ControllersEspacios.getEspacios);

// ── POST /espacios/ ───────────────────────────────────────
router.post('/espacios', ControllersEspacios.crearEspacios);

// ── POST /reservas ─────────────────────────────────────────────
router.post('/reservas', verificarToken, validateReserva, ControllersReservas.createReserva);

// ── PUT /reservas/:id ──────────────────────────────────────────
router.put('/reservas/:id', verificarToken, validateReserva, ControllersReservas.updateReserva);

// ── DELETE /reservas/:id ───────────────────────────────────────
router.delete('/reservas/:id', verificarToken, ControllersReservas.deleteReserva);

// ── GET /reservas/ ───────────────────────────────────────
router.get('/reservas',verificarToken, ControllersReservas.getReservas);

// ── POST /usuarios/registrar ───────────────────────────────────────
router.post('/usuarios/registrar', ControllersUsuarios.registrarUsuario);

// ── POST /usuarios/login ───────────────────────────────────────
router.post('/usuarios/login', ControllersUsuarios.loginUsuario);


module.exports = router;