const mongoose = require('mongoose');
require('./src/models/Usuario');
require('./src/models/Espacio');
require('./src/models/Reserva');

const clearDatabase = async () => {
  try {
    // Replace with your actual connection string if different
    await mongoose.connect('mongodb://localhost:27017/workhub');
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