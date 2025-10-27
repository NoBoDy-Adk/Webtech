 const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// Import models and routes
const User = require('./models/User');
const Post = require('./models/Post');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const { testConnection } = require('./config/database');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Initialize database
const initializeDatabase = async () => {
  try {
    console.log('Testing database connection...');
    const isConnected = await testConnection();
    
    if (!isConnected) {
      throw new Error('Failed to establish database connection');
    }
    
    console.log('Creating database tables...');
    await User.createTable();
    await Post.createTable();

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
};

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
// Public route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Auth API',
        endpoints: {
            register: 'POST /api/auth/register',
            login: 'POST /api/auth/login'
        }
    });
});


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

const PORT = process.env.PORT || 3000;

// Start server
const startServer = async () => {
    await initializeDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
};

startServer().catch(console.error);