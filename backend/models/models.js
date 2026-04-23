const spacesData = require('../data/espacios.json'); 

const spaceModel = {
    // Función para obtener los datos instanciados
    findAll: () => {
        return spacesData; 
    }
};

module.exports = spaceModel; 