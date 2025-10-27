const { pool } = require('../config/database');

class Post {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS post (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        description VARCHAR(100)  NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    try {
      await pool.query(query);
      console.log('Post table created successfully');
    } catch (error) {
      console.error('Error creating post table:', error);
      throw error;
    }
  }




  static async create(postData) {
    const { name, description } = postData;
    const query = `
      INSERT INTO post (name, description)
      VALUES ($1, $2)
      RETURNING id, name, description, created_at
    `;

    const result = await pool.query(query, [name, description]);
    return result.rows[0];
  }

  


  static async findByName(name) {
    const query = `
      SELECT id, name, description, created_at FROM post WHERE name = $1
    `;
    
    const result = await pool.query(query, [name]);
    return result.rows[0];
  }

  static async findById(id) {
    const query = `
      SELECT id, name, description, created_at FROM post WHERE id = $1
    `;
    
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async update(postData) {
    const { id, name, description } = postData;
    const query = `
      UPDATE post SET name = $1, description = $2, updated_at = CURRENT_TIMESTAMP 
      WHERE id = $4
      RETURNING id, name, description, created_at, updated_at
    `;
    
    const result = await pool.query(query, [name, description, id]);
    return result.rows[0];
  }

  static async delete(id) {
    const query = `
      DELETE FROM post WHERE id = $1
      RETURNING id, name, description, created_at
    `;
    
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async findAll() {
    const query = `
      SELECT id, name, description, created_at FROM post
    `;
    
    const result = await pool.query(query);
    return result.rows;
  }
  

}

module.exports = Post;
