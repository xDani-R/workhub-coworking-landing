const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware para CORS (permite peticiones desde el frontend)
app.use(cors());

// Middleware para poder recibir datos en formato JSON
app.use(express.json());

// Importar las rutas
const routes = require('./routes/routes');

// Registrar las rutas en la aplicación
app.use('/', routes);

// Levantar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});