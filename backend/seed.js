require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/database'); // Import your custom connection logic

// Registrar modelos
require('./src/models/Usuario');
require('./src/models/Espacio');
require('./src/models/Reserva');

const runSeed = async () => {
  try {
    // Calling the function from database.js (this includes your DNS fix)
    await connectDB();
    console.log('Connected to seed DB');

    // --- 1. CREATE USER ---
    const user = await mongoose.model('Usuario').create({
      nombre: "Test User",
      email: "test@example.com",
      telefono: "123456789"
    });
    console.log('User created:', user._id);

    // --- 2. CREATE SPACE ---
    const space = await mongoose.model('Espacio').create({
      id: "space-001",
      nombre: "Oficina Central",
      direccion: "Calle Falsa 123",
      salas: [{
        id: "sala-A",
        nombre: "Sala A",
        precio: "50",
        imagen: "url.jpg",
        tipo: "privada",
        amenidades: ["wifi", "proyector"]
      }]
    });
    console.log('Space created:', space._id);

    // --- 3. CREATE RESERVATION ---
    const reserva = await mongoose.model('Reserva').create({
      usuario: user._id,
      espacio: space._id,
      salaId: "sala-A",
      fecha: new Date("2026-04-25T10:00:00Z"),
      horaInicio: "09:00", 
      horaFin: "11:00",   
      estado: "pendiente"
    });

    console.log('✅ Seeding complete.');
    console.log('New Reservation ID:', reserva._id.toString());
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed Error:', error.message);
    process.exit(1);
  }
};

runSeed();