// config/database.js
const dns = require('node:dns'); 
const mongoose = require('mongoose');

/**
 * Force the Node.js process to use Cloudflare's DNS (1.1.1.1) 
 * to resolve the MongoDB Atlas SRV records. This bypasses 
 * local ISP or network restrictions.
 */
dns.setServers(['1.1.1.1']);

const connectDB = async () => {
  try {
    // Note: Ensure your password and cluster name are correct.
    // Based on your previous error, the connection string format is correct.
    await mongoose.connect('mongodb+srv://jeff_db_user:ipPJTfycCC47iCgm@workhub.rkzkvvu.mongodb.net/WorkhubDB?appName=WorkHub');
    
    console.log('✅ MongoDB conectado exitosamente');
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error.message);
    
    // If it still fails here, the issue is likely a local firewall 
    // blocking port 27017, even with the DNS fix.
    process.exit(1);
  }
};

module.exports = connectDB;