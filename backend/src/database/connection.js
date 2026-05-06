    // src/database/connection.js
    const mongoose = require('mongoose');

    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB conectado'))
    .catch(err => console.error('❌ Error:', err));

    module.exports = mongoose;