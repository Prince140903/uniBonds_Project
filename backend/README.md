# UniBonds Backend API

Backend API for UniBonds Securities platform with authentication system.

## Features

- ✅ User Registration (Signup)
- ✅ User Login
- ✅ JWT Authentication
- ✅ Password Hashing (bcrypt)
- ✅ Protected Routes
- ✅ Profile Management
- ✅ Password Update
- ✅ Input Validation
- ✅ Error Handling
- ✅ Security Headers (Helmet)
- ✅ Rate Limiting
- ✅ CORS Support

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Create Environment File**

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/unibonds
# OR use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/unibonds

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

3. **Start MongoDB**

If using local MongoDB:
```bash
mongod
```

Or sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier available)

4. **Run the Server**

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server will start at: `http://localhost:5000`

## API Endpoints

### Public Routes

#### 1. Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2025-11-03T10:30:00.000Z"
}
```

#### 2. User Signup
```http
POST /api/auth/signup
Content-Type: application/json
```

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "role": "user",
    "token": "jwt_token_here"
  }
}
```

#### 3. User Login
```http
POST /api/auth/login
Content-Type: application/json
```

**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "role": "user",
    "token": "jwt_token_here"
  }
}
```

### Protected Routes

All protected routes require an Authorization header:
```
Authorization: Bearer <jwt_token>
```

#### 4. Get Current User
```http
GET /api/auth/me
Authorization: Bearer <jwt_token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "role": "user",
    "createdAt": "2025-11-03T10:30:00.000Z"
  }
}
```

#### 5. Update Profile
```http
PUT /api/auth/updateprofile
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Body:**
```json
{
  "name": "John Updated",
  "email": "johnupdated@example.com",
  "phone": "9876543210"
}
```

#### 6. Update Password
```http
PUT /api/auth/updatepassword
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Body:**
```json
{
  "currentPassword": "password123",
  "newPassword": "newpassword123"
}
```

## Testing with cURL

### Signup
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123","phone":"1234567890"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Get User Profile
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Project Structure

```
unibonds-backend/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   └── authController.js     # Authentication logic
├── middleware/
│   ├── auth.js              # JWT verification
│   └── errorHandler.js      # Error handling
├── models/
│   └── User.js              # User model
├── routes/
│   └── authRoutes.js        # Auth endpoints
├── utils/
│   └── generateToken.js     # JWT token generation
├── .env                     # Environment variables (create this)
├── .env.example             # Environment template
├── .gitignore               # Git ignore file
├── package.json             # Dependencies
├── server.js                # App entry point
└── README.md                # Documentation
```

## Error Handling

All errors follow this format:
```json
{
  "success": false,
  "message": "Error message here",
  "errors": [] // Optional validation errors
}
```

## Security Features

1. **Password Hashing** - bcrypt with 10 salt rounds
2. **JWT Authentication** - Secure token-based auth
3. **Helmet.js** - Security headers
4. **Rate Limiting** - 100 requests per 10 minutes per IP
5. **Input Validation** - express-validator
6. **CORS** - Configured for specific origins
7. **Environment Variables** - Sensitive data protection

## Next Steps

1. Install dependencies: `npm install`
2. Create `.env` file with your configuration
3. Start MongoDB
4. Run the server: `npm run dev`
5. Test the endpoints with Postman or cURL

## Frontend Integration

To integrate with your HTML frontend in `public_html/`, you can use fetch or axios:

```javascript
// Example login
fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    // Store token
    localStorage.setItem('token', data.data.token);
    // Store user info
    localStorage.setItem('user', JSON.stringify(data.data));
  }
});
```

## Support

For issues or questions, please create an issue in the repository.

## License

ISC

