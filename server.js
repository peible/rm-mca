require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error.message);
  console.log('\n⚠️  MongoDB is not running. Please start MongoDB to use the API.');
  console.log('   You can install and start MongoDB with:');
  console.log('   - Docker: docker run -d -p 27017:27017 --name mongodb mongo:latest');
  console.log('   - Or install MongoDB locally and run: mongod');
  console.log('   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/atlas\n');
});

// Routes
app.use('/todos', require('./routes/todos'));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Todo API is running!',
    version: '1.0.0',
    endpoints: {
      'GET /todos': 'Get all todos',
      'POST /todos': 'Create a new todo',
      'GET /todos/:id': 'Get a single todo by id',
      'PUT /todos/:id': 'Update a single todo by id',
      'DELETE /todos/:id': 'Delete a single todo by id'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? error.message : {}
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API documentation available at http://localhost:${PORT}`);
});
