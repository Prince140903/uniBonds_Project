# UniBonds Backend Setup Guide

This guide will help you set up and run the Node.js backend with authentication.

## Step-by-Step Setup

### 1. Install Node.js

If you don't have Node.js installed:

**Windows:**
- Download from: https://nodejs.org/
- Choose LTS version
- Run installer
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

**Mac:**
```bash
brew install node
```

**Linux:**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Install MongoDB

**Option A: Local MongoDB (Recommended for Development)**

**Windows:**
1. Download MongoDB Community Server from: https://www.mongodb.com/try/download/community
2. Run the installer
3. Choose "Complete" installation
4. Install MongoDB as a Service
5. Start MongoDB service from Services app or:
   ```bash
   net start MongoDB
   ```

**Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

**Option B: MongoDB Atlas (Cloud - Free)**

1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a free cluster
4. Get your connection string
5. Update your `.env` file with the Atlas connection string

### 3. Install Backend Dependencies

Open PowerShell/Terminal in the project root directory:

```bash
# Navigate to project directory
cd C:\Users\floyd\Downloads\unibonds.in

# Install dependencies
npm install
```

This will install:
- express
- mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors
- express-validator
- helmet
- express-rate-limit
- nodemon (dev dependency)

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
# Create .env file
copy .env.example .env
```

Or manually create `.env` with this content:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/unibonds

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_abc123xyz
JWT_EXPIRE=7d

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

**Important:** Change `JWT_SECRET` to a strong random string!

### 5. Start the Backend Server

**Development Mode (with auto-restart):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

You should see:
```
╔════════════════════════════════════════╗
║   UniBonds API Server Started          ║
║   Environment: development             ║
║   Port: 5000                           ║
║   URL: http://localhost:5000           ║
╚════════════════════════════════════════╝
MongoDB Connected: localhost
```

### 6. Test the Backend

Open your browser or use curl:

**Test Health Endpoint:**
```bash
curl http://localhost:5000/api/health
```

**Test Signup (using curl):**
```bash
curl -X POST http://localhost:5000/api/auth/signup -H "Content-Type: application/json" -d "{\"name\":\"John Doe\",\"email\":\"john@example.com\",\"password\":\"password123\",\"phone\":\"1234567890\"}"
```

**Test Login (using curl):**
```bash
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"john@example.com\",\"password\":\"password123\"}"
```

### 7. Test Frontend Pages

1. Open `public_html/signup.html` in your browser
2. Create a test account
3. You should be redirected to the main page after successful signup

Or test the login page:
1. Open `public_html/login.html`
2. Use the credentials you created
3. You should be logged in successfully

### 8. Troubleshooting

**Error: MongoDB connection failed**
- Make sure MongoDB is running:
  ```bash
  # Windows
  net start MongoDB
  
  # Mac
  brew services start mongodb-community
  
  # Linux
  sudo systemctl start mongod
  ```

**Error: Port 5000 already in use**
- Change the PORT in `.env` file to another port (e.g., 5001)
- Update the API_URL in frontend files

**Error: CORS issues**
- Make sure the backend is running
- Check that FRONTEND_URL in `.env` matches your frontend URL
- For testing, you can set it to `*` temporarily

**Error: Cannot connect from frontend**
- Check if backend server is running
- Verify the API_URL in `login.html` and `signup.html` matches your backend URL
- Open browser console to see detailed errors

### 9. Frontend Integration

The frontend HTML files are already created:
- `public_html/login.html` - Login page
- `public_html/signup.html` - Signup page  
- `public_html/js/auth.js` - Authentication utilities

To integrate with your existing pages:

**Add login/signup links to your navigation:**
```html
<nav>
  <a href="login.html">Login</a>
  <a href="signup.html">Sign Up</a>
  <div id="userInfo"></div>
</nav>

<script src="js/auth.js"></script>
```

**Protect pages that require authentication:**
```html
<script>
if (!isLoggedIn()) {
    window.location.href = 'login.html';
}
</script>
```

### 10. Next Steps

Now that authentication is set up, you can:

1. ✅ Add more routes and controllers
2. ✅ Create dashboard page
3. ✅ Add profile management
4. ✅ Implement password reset
5. ✅ Add email verification
6. ✅ Create admin panel
7. ✅ Add more features specific to your app

### 11. Deployment

**For Production:**

1. Change environment variables in `.env`:
   - Set `NODE_ENV=production`
   - Use MongoDB Atlas for database
   - Generate strong `JWT_SECRET`
   - Set proper `FRONTEND_URL`

2. Deploy backend to:
   - Heroku
   - AWS
   - DigitalOcean
   - Railway
   - Render

3. Update frontend API_URL to your production backend URL

### 12. Security Checklist

- [x] Passwords are hashed with bcrypt
- [x] JWT tokens for authentication
- [x] Input validation on all endpoints
- [x] Rate limiting enabled
- [x] CORS configured
- [x] Security headers (Helmet)
- [ ] HTTPS in production
- [ ] Environment variables secured
- [ ] Database access restricted
- [ ] API keys rotated regularly

## Need Help?

If you encounter any issues:

1. Check the server console for errors
2. Check the browser console for frontend errors
3. Verify MongoDB is running
4. Verify all dependencies are installed
5. Check that ports are not blocked by firewall

## Useful Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start

# Check Node version
node --version

# Check npm version
npm --version

# Check MongoDB status (Windows)
net start | findstr MongoDB

# Check MongoDB status (Mac)
brew services list | grep mongodb

# Check MongoDB status (Linux)
sudo systemctl status mongod
```

Congratulations! Your backend is now set up and ready to use! 🎉

