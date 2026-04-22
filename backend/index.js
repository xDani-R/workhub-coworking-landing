const express = require('express');
const cors = require('cors');

// Importamos las rutas
const routes = require('./src/Routes/routes')

const app = express();
const PORT = 3001;

// Middleware para CORS (permite peticiones desde el frontend)
app.use(cors());

// Middleware para poder recibir datos en formato JSON
app.use(express.json());

// Registrar las rutas en la aplicación
app.use('/', routes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});