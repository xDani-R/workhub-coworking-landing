const fs = require('fs');
const path = require('path');

// Rutas a los archivo JSON
const reservasJson = path.join(__dirname, '..', 'data', 'reservas.json');
const espaciosJson = path.join(__dirname, '..', 'data', 'espacios.json');


// ─── Helpers privados ───────────────────────────────────────────────────────

const getDataReservas = () => {
    const rawData = fs.readFileSync(reservasJson, 'utf-8');
    const parsed = JSON.parse(rawData || '{}');
    // Soporta tanto { reservas: [] } como un array directo []
    return Array.isArray(parsed) ? { reservas: parsed } : parsed;
};

const getDataEspacios = () => {
    const rawData = fs.readFileSync(espaciosJson, 'utf-8');
    const parsed = JSON.parse(rawData || '{}');
    return Array.isArray(parsed) ? { espacios: parsed } : parsed;
};

const saveData = (jsonData) => {
    fs.writeFileSync(reservasJson, JSON.stringify(jsonData, null, 2));
};

// ─── Models ─────────────────────────────────────────────────────────────────

const Models = {
    // Obtener todos los espacios
    getEspacios: () => {
        const jsonData = getDataEspacios();
        return jsonData.espacios || [];
    },


    // Obtener todas las reservas
    getReservas: () => {
        const jsonData = getDataReservas();
        return jsonData.reservas || [];
    },

    // Guardar todas las reservas (reemplaza el array completo)
    saveReservas: (reservas) => {
        const jsonData = getDataReservas();
        jsonData.reservas = reservas;
        saveData(jsonData);
    },

    // Eliminar una reserva por ID
    deleteReservation: async (id) => {
        try {
            const jsonData = getDataReservas();
            const reservas = jsonData.reservas || [];

            const index = reservas.findIndex(reserva => reserva.id == id);

            if (index === -1) return null;

            const deleted = reservas.splice(index, 1)[0];

            saveData(jsonData);

            return deleted;

        } catch (error) {
            console.error('Error en Model al eliminar:', error);
            throw error;
        }
    }
};

module.exports = Models;