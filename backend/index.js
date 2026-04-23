const express = require('express')
const cors = require('cors')
const routes = require('./src/Routes/routes')

const app = express()
const PORT = 3001


//Instanciación de rutas: Vinculas los endpoints definidos en Routes.js
app.use('/', routes);

//Ejecución del servidor 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});