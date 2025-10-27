# Node.js Authentication API with PostgreSQL

A complete Node.js REST API with PostgreSQL database and JWT-based authentication.

## Features

- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- PostgreSQL database integration
- Input validation
- Rate limiting
- Security middleware (helmet, cors)
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn

## PostgreSQL Installation

### Ubuntu/Debian
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

### Windows
Download and install from: https://www.postgresql.org/download/windows/

### macOS
```bash
brew install postgresql
brew services start postgresql
```

### Docker (Alternative)
```bash
docker run --name postgres-auth -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres
```

## Database Setup

1. Start PostgreSQL service:
```bash
sudo systemctl start postgresql  # Linux
brew services start postgresql   # macOS
```

2. Create database and user:
```bash
sudo -u postgres psql

# In PostgreSQL prompt:
CREATE DATABASE nodedemo;
CREATE USER your_db_user WITH PASSWORD 'your_db_password';
GRANT ALL PRIVILEGES ON DATABASE nodedemo TO your_db_user;
\q
```

## Installation

1. Clone or download this project
2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` file with your database credentials:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nodedemo
DB_USER=your_db_user
DB_PASSWORD=your_db_password
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
PORT=3000
NODE_ENV=development
```

5. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will automatically create the required database tables on first run.

## API Endpoints

### Authentication Routes

#### Register User
- **POST** `/api/auth/register`
- **Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "Password123"
}
```

#### Login User
- **POST** `/api/auth/login`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

#### Get User Profile
- **GET** `/api/auth/profile`
- **Headers:** `Authorization: Bearer <token>`

#### Update Profile
- **PUT** `/api/auth/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "username": "newusername",
  "email": "newemail@example.com"
}
```

#### Change Password
- **PUT** `/api/auth/change-password`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "currentPassword": "oldPassword123",
  "newPassword": "newPassword123"
}
```

#### Logout
- **POST** `/api/auth/logout`
- **Headers:** `Authorization: Bearer <token>`

### Other Routes

#### Home
- **GET** `/`
- Returns API information and available endpoints

#### Dashboard (Example Protected Route)
- **GET** `/api/dashboard`
- **Headers:** `Authorization: Bearer <token>` (optional)
- Shows different content based on authentication status

## Password Requirements

- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number

## Username Requirements

- 3-20 characters
- Letters, numbers, and underscores only

## Security Features

- Password hashing with bcrypt (12 salt rounds)
- JWT token authentication
- Rate limiting (5 auth requests per 15 minutes, 100 general requests per 15 minutes)
- Input validation and sanitization
- Security headers with helmet
- CORS enabled

## Error Handling

All endpoints return JSON responses with the following structure:

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {...}
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description"
}
```

## Testing the API

You can test the API using tools like:
- Postman
- curl
- Insomnia
- Thunder Client (VS Code extension)

### Example curl commands:

```bash
# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"Test123456"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123456"}'

# Get Profile (replace YOUR_TOKEN with actual token)
curl -X GET http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Project Structure

```
nodedemo/
├── config/
│   └── database.js          # Database connection
├── middleware/
│   └── auth.js              # Authentication middleware
├── models/
│   └── User.js              # User model/schema
├── routes/
│   └── auth.js              # Authentication routes
├── utils/
│   └── auth.js              # Authentication utilities
├── index.js                 # Main application file
├── package.json
└── .env.example             # Environment variables template
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

ISC License
