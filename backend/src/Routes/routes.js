const express = require('express');
const router = express.Router();
const { ControllersReservas, ControllersEspacios, ControllersUsuarios } = require('../controllers/controllers');
const validateReserva = require('../Middlewares/validateReserva');

// ── GET /espacios/ ───────────────────────────────────────
router.get('/espacios', ControllersEspacios.getEspacios);

// ── POST /espacios/ ───────────────────────────────────────
router.post('/espacios', ControllersEspacios.crearEspacios);

// ── POST /reservas ─────────────────────────────────────────────
router.post('/reservas', validateReserva, ControllersReservas.createReserva);

// ── PUT /reservas/:id ──────────────────────────────────────────
router.put('/reservas/:id', validateReserva, ControllersReservas.updateReserva);

// ── DELETE /reservas/:id ───────────────────────────────────────
router.delete('/reservas/:id', ControllersReservas.deleteReserva);

// ── GET /reservas/ ───────────────────────────────────────
router.get('/reservas', ControllersReservas.getReservas);

// ── POST /usuarios/registrar ───────────────────────────────────────
router.post('/usuarios/registrar', ControllersUsuarios.registrarUsuario);

// ── POST /usuarios/login ───────────────────────────────────────
router.post('/usuarios/login', ControllersUsuarios.loginUsuario);


module.exports = router;