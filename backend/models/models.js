const fs = require('fs');
const path = require('path');

// Define la ruta hacia tu archivo de datos (ajusta si tu carpeta data está en otro lado)
// Asumiendo que data está en el nivel superior a models: ../data/reservas.json
const DATA_FILE_PATH = path.join(__dirname, '..', 'data', 'reservas.json');

// Función auxiliar para leer el JSON
const getData = () => {
    const rawData = fs.readFileSync(DATA_FILE_PATH);
    return JSON.parse(rawData);
};

// Función auxiliar para escribir el JSON
const saveData = (data) => {
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2));
};

/**
 * Busca y elimina una reserva por ID
 * @param {string} id - El ID de la reserva a eliminar
 * @returns {Object|null} La reserva eliminada o null si no existe
 */
const deleteReservation = async (id) => {
    try {
        // 1. Leer datos actuales
        const jsonData = getData();
        const reservas = jsonData.reservas; // Asumiendo estructura { "reservas": [] }

        // 2. Buscar el índice de la reserva
        const index = reservas.findIndex(reserva => reserva.id === id);

        // 3. Si no se encuentra, retornar null
        if (index === -1) {
            return null;
        }

        // 4. Eliminar la reserva del array (splice devuelve un array, tomamos el primero [0])
        const deletedReservation = reservas.splice(index, 1)[0];

        // 5. Guardar los cambios en el archivo JSON
        saveData(jsonData);

        // 6. Retornar la reserva eliminada
        return deletedReservation;

    } catch (error) {
        console.error("Error en Model al eliminar:", error);
        throw error;
    }
};

// Exportar la función
module.exports = { deleteReservation };