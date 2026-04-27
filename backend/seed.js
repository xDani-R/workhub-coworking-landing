const mongoose = require('mongoose');
require('./src/models/Usuario');
require('./src/models/Espacio');
require('./src/models/Reserva');

mongoose.connect('mongodb://localhost:27017/workhub')
  .then(async () => {
    console.log('Connected to seed DB');

    try {
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
  })
  .catch(err => {
    console.error('DB Connection Error:', err);
    process.exit(1);
  });