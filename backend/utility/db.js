require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    // Remove legacy index that causes duplicate key errors
    try {
      await mongoose.connection.collection('users').dropIndex('username_1');
      console.log('Dropped legacy index: username_1');
    } catch (error) {
      // Index might not exist or already dropped, which is fine
    }
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
