const express = require('express')
const cors = require('cors')

// 1. Importamos las rutas
const routes = require('./src/Routes/routes')

const app = express()
const PORT = 3001

// 2. Middleware para parsear JSON
app.use(cors())
app.use(express.json()); //Esto permite que el servidor entienda las solicitudes con cuerpo JSON

// 3. Instanciar las rutas (Endpoints)
// Esto hace que todas las rutas empiecen con /api, por ejemplo: POST http://localhost:3001/api/reservas
app.use('/api', routes)

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`)
})