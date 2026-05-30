const mongoose = require('mongoose');
const URI = process.env.MONGO_URI || 'mongodb://localhost:27017/petfood';

// Ativa logs do MongoDB no terminal durante o modo de desenvolvimento
mongoose.set('debug', true);

const handleConnectDatabase = async () => {
  try {
    await mongoose.connect(URI);
    console.log('🍃 [MongoDB] Database is running and connected successfully.');
  } catch (error) {
    console.error('❌ [MongoDB] Error connecting to database:', error.message);
  }
};

handleConnectDatabase();

module.exports = mongoose;
