const fs = require('fs');
const path = require('path');

// Rutas a los archivos JSON
const pathReservas = path.join(__dirname, '../data/reservas.json');

const Models = {
    // Leer reservas desde el archivo JSON
    getReservas: () => {
        const data = fs.readFileSync(pathReservas, 'utf-8');
        return JSON.parse(data || '[]'); // Si está vacío, devuelve un array vacío
    },

    // Guardar reservas en el archivo JSON
    saveReservas: (reservas) => {
        fs.writeFileSync(pathReservas, JSON.stringify(reservas, null, 2));
    }
};

module.exports = Models;