const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes'); 

const app = express();
const PORT = 3001;

//Funciones que procesan la petición antes de llegar a las rutas
app.use(cors()); 
app.use(express.json()); 

//Instanciación de rutas: Vinculas los endpoints definidos en Routes.js
app.use('/api', routes);

//Ejecución del servidor 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});