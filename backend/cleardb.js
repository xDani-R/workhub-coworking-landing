require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/database'); // Import your custom connection logic

require('./src/models/Usuario');
require('./src/models/Espacio');
require('./src/models/Reserva');

const clearDatabase = async () => {
  try {
    // Calling the function from database.js
    await connectDB();
    console.log('Connected to DB for cleanup...');

    const collections = ['Usuario', 'Espacio', 'Reserva'];
    
    // Map through models and delete all documents
    await Promise.all(
      collections.map(modelName => mongoose.model(modelName).deleteMany({}))
    );

    console.log('✅ Database successfully cleared.');
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Cleanup Error:', error.message);
    process.exit(1);
  }
};

clearDatabase();