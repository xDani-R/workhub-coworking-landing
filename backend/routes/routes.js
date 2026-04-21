// 1. Importamos Express y Router
const express = require('express');
const router = express.Router();

// 2. Importamos la función controladora desde controllers.js
// Ajusta la ruta '../controllers/controllers' si tu estructura de carpetas es diferente
const { deleteReservationController } = require('../controllers/controllers');

// 3. Vinculamos el método HTTP y la URL con la función
// DELETE /reservas/:id
router.delete('/reservas/:id', deleteReservationController);

// 4. Exportamos el router para que index.js pueda usarlo
module.exports = router;