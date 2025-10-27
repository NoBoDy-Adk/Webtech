const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'demo',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  ssl: false, // keep it simple for localhost; enable if using cloud DB
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,
  query_timeout: 30000,
  statement_timeout: 30000,
});
// Test the connection
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Database connection error:', err);
  console.error('Error details:', {
    code: err.code,
    message: err.message,
    stack: err.stack
  });
});

// Add connection testing function
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Database connection test successful');
    client.release();
    return true;
  } catch (err) {
    console.error('Database connection test failed:', err);
    return false;
  }
};

module.exports = { pool, testConnection };
