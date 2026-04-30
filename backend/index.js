const express = require('express')
const cors = require('cors')
const routes = require('./src/Routes/routes')
const errorHandler = require('./src/Middlewares/errorHandler');
const logger = require('./src/Middlewares/logger');
require('dotenv').config();
require('./src/database/connection');

const app = express()
const PORT = 3001

app.use(express.json());
app.use(logger);


//Instanciación de rutas: Vinculas los endpoints definidos en Routes.js
app.use('/', routes);


app.use(errorHandler); 

//Ejecución del servidor 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});