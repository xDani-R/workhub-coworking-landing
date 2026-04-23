const express = require('express');
const router = express.Router();
const spaceController = require('../controllers/controllers');

// Vinculación de la ruta GET '/spaces' con la función del controlador 
router.get('/espacios', spaceController.getSpaces);

module.exports = router;