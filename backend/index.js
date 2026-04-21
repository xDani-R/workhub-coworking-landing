// instanciar las rutas aqui

const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3001



app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`)
})