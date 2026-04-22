const spaceModel = require('../models/models');

const spaceController = {
    // Función para obtener espacios 
    getSpaces: (req, res) => {
        const data = spaceModel.findAll();
        // Respondemos con el código 200 y los datos en JSON
        res.status(200).json(data); 
    }
};

module.exports = spaceController; 