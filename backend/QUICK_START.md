# 🚀 Quick Start Guide

Get your UniBonds backend running in 5 minutes!

## Prerequisites

- ✅ Node.js installed (v14+)
- ✅ MongoDB installed OR MongoDB Atlas account

## Quick Setup (Windows)

### Option 1: Automatic Setup

1. **Double-click** `start-server.bat`
2. First run will install dependencies automatically
3. Server starts at `http://localhost:5000`

### Option 2: Manual Setup

```powershell
# 1. Install dependencies
npm install

# 2. Create .env file
copy env.example.txt .env

# 3. Edit .env file and add your MongoDB URI

# 4. Start the server
npm run dev
```

## Quick Setup (Mac/Linux)

```bash
# 1. Install dependencies
npm install

# 2. Create .env file
cp env.example.txt .env

# 3. Edit .env and configure

# 4. Start server
npm run dev
```

## Verify Installation

Open browser to:
- **API Health:** http://localhost:5000/api/health
- **Login Page:** Open `public_html/login.html` in browser
- **Signup Page:** Open `public_html/signup.html` in browser

## Test the API

### Using the Browser

1. Open `public_html/signup.html`
2. Create an account
3. You'll be redirected to the main page
4. Open `public_html/dashboard.html` to see your profile

### Using cURL (Command Line)

**Signup:**
```bash
curl -X POST http://localhost:5000/api/auth/signup -H "Content-Type: application/json" -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"password\":\"password123\"}"
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"test@example.com\",\"password\":\"password123\"}"
```

## Common Issues

### "MongoDB connection failed"
**Solution:** Make sure MongoDB is running
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### "Port 5000 already in use"
**Solution:** Change PORT in `.env` to 5001 or another available port

### ".env file not found"
**Solution:** Copy `env.example.txt` to `.env`

### "Cannot connect from frontend"
**Solution:** 
1. Check backend is running at http://localhost:5000
2. Check browser console for errors
3. Verify API_URL in HTML files matches your backend

## Project Structure

```
unibonds.in/
├── config/
│   └── db.js                    # Database connection
├── controllers/
│   └── authController.js        # Auth logic
├── middleware/
│   ├── auth.js                  # JWT verification
│   └── errorHandler.js          # Error handling
├── models/
│   └── User.js                  # User schema
├── routes/
│   └── authRoutes.js            # API endpoints
├── utils/
│   └── generateToken.js         # JWT generation
├── public_html/                 # Frontend files
│   ├── login.html               # Login page ✨
│   ├── signup.html              # Signup page ✨
│   ├── dashboard.html           # Protected page ✨
│   └── js/
│       └── auth.js              # Auth utilities ✨
├── .env                         # Config (create this)
├── env.example.txt              # Config template
├── package.json                 # Dependencies
├── server.js                    # Entry point
├── start-server.bat             # Windows startup script
└── README.md                    # Full documentation
```

## API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/health` | Health check | No |
| POST | `/api/auth/signup` | Create account | No |
| POST | `/api/auth/login` | Login | No |
| GET | `/api/auth/me` | Get profile | Yes |
| PUT | `/api/auth/updateprofile` | Update profile | Yes |
| PUT | `/api/auth/updatepassword` | Change password | Yes |

## Environment Variables

Create `.env` file with:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/unibonds
JWT_SECRET=change_this_to_random_string
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

## Next Steps

1. ✅ Backend is running
2. ✅ Test signup and login
3. 🔄 Add more features:
   - Email verification
   - Password reset
   - User roles
   - Admin panel
   - Bond listings
   - Investment tracking

## Need Help?

- 📖 Read full documentation: `README.md`
- 🔧 Setup guide: `SETUP_GUIDE.md`
- 🧪 API testing: `test-api.http`

## Development Commands

```bash
npm run dev      # Start with auto-reload
npm start        # Start production mode
node server.js   # Start directly
```

## What's Included? ✨

### Backend Features
- ✅ User registration with validation
- ✅ Secure login with JWT
- ✅ Password hashing (bcrypt)
- ✅ Protected routes middleware
- ✅ Profile management
- ✅ Password update
- ✅ Error handling
- ✅ Security headers (Helmet)
- ✅ Rate limiting
- ✅ CORS support

### Frontend Features
- ✅ Beautiful login page
- ✅ Beautiful signup page
- ✅ Dashboard with user info
- ✅ Authentication utilities
- ✅ Token management
- ✅ Auto-redirect for protected pages
- ✅ Responsive design

## Security Features

- 🔒 Password hashing with bcrypt (10 rounds)
- 🔑 JWT tokens for stateless auth
- 🛡️ Input validation on all endpoints
- ⏱️ Rate limiting (100 req/10min)
- 🌐 CORS configuration
- 🔐 Security headers (Helmet.js)
- 🚫 SQL injection prevention (MongoDB)
- ✅ XSS protection

---

**Ready to go! 🎉**

Your authentication system is fully set up and ready to use!

