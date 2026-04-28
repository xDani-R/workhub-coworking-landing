require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Opcional: si tu frontend está en otro puerto

// Importar conexión a BD
const connectDB = require('./config/database');

// Registrar modelos con mongoose
require('./src/Models/Usuario');
require('./src/Models/Espacio');
require('./src/Models/Reserva');

// Importar rutas
const reservasRoutes = require('./src/Routes/routes');

// Inicializar app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Opcional
app.use(express.json()); // Para parsear JSON en requests

// Conectar a MongoDB antes de iniciar el servidor
connectDB().then(() => {
  console.log('✅ Base de datos conectada');

  // Rutas
  app.use('/api', reservasRoutes);

  // Ruta de prueba (opcional)
  app.get('/', (req, res) => {
    res.send('🚀 WorkHub API está corriendo');
  });

  // Manejo de errores global (opcional pero recomendado)
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Algo salió mal' });
  });

  // Iniciar servidor
  app.listen(PORT, () => {
    console.log(` Servidor escuchando en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('❌ Error al conectar a la base de datos:', err);
  process.exit(1); // Salir si no se puede conectar a la BD
});