const { pool } = require('../config/database');

class User {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    try {
      await pool.query(query);
      console.log('Users table created successfully');
    } catch (error) {
      console.error('Error creating users table:', error);
      throw error;
    }
  }




  static async create(userData) {
    const { username, email, password } = userData;
    const query = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, username, email, created_at
    `;
    
    const result = await pool.query(query, [username, email, password]);
    return result.rows[0];
  }

  


  static async findByEmail(email) {
    const query = `
      SELECT id, username, email, password, created_at FROM users WHERE email = $1
    `;
    
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }

  static async findById(id) {
    const query = `
      SELECT id, username, email, created_at FROM users WHERE id = $1
    `;
    
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async update(userData) {
    const { id, username, email, password } = userData;
    const query = `
      UPDATE users SET username = $1, email = $2, password = $3, updated_at = CURRENT_TIMESTAMP 
      WHERE id = $4
      RETURNING id, username, email, created_at, updated_at
    `;
    
    const result = await pool.query(query, [username, email, password, id]);
    return result.rows[0];
  }

  static async delete(id) {
    const query = `
      DELETE FROM users WHERE id = $1
      RETURNING id, username, email, created_at
    `;
    
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async delete(id) { 
    const query = `
      DELETE FROM users WHERE id = $1
      RETURNING id, username, email, created_at
    `;
    
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
  

}

module.exports = User;
