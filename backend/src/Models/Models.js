const fs = require('fs');
const path = require('path');

// Ruta al archivo JSON
const DATA_FILE_PATH = path.join(__dirname, '..', 'data', 'reservas.json');

// ─── Helpers privados ───────────────────────────────────────────────────────

const getData = () => {
    const rawData = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(rawData || '{}');
    // Soporta tanto { reservas: [] } como un array directo []
    return Array.isArray(parsed) ? { reservas: parsed } : parsed;
};

const saveData = (jsonData) => {
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(jsonData, null, 2));
};

// ─── Models ─────────────────────────────────────────────────────────────────

const Models = {

    // Obtener todas las reservas
    getReservas: () => {
        const jsonData = getData();
        return jsonData.reservas || [];
    },

    // Guardar todas las reservas (reemplaza el array completo)
    saveReservas: (reservas) => {
        const jsonData = getData();
        jsonData.reservas = reservas;
        saveData(jsonData);
    },

    // Eliminar una reserva por ID
    deleteReservation: async (id) => {
        try {
            const jsonData = getData();
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