require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./utility/db');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// Example route
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/services', require('./routes/servicesRoutes'));
app.use('/api/articles', require('./routes/articleRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
  console.log(`Server running on port ${PORT}`);
});
