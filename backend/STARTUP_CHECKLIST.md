# ✅ Startup Checklist

Follow this checklist to get your UniBonds backend running.

## Pre-Installation ✓

- [ ] Node.js installed (v14 or higher)
  - Verify: `node --version`
- [ ] npm installed
  - Verify: `npm --version`
- [ ] MongoDB installed OR MongoDB Atlas account created
  - For local: Verify with `mongod --version`
  - For Atlas: Have connection string ready

## Installation Steps ✓

- [ ] Navigate to project directory
  ```bash
  cd C:\Users\floyd\Downloads\unibonds.in
  ```

- [ ] Install dependencies
  ```bash
  npm install
  ```
  - Should install ~20 packages

- [ ] Create .env file
  ```bash
  copy env.example.txt .env
  ```

- [ ] Configure .env file
  - [ ] Set PORT (default: 5000)
  - [ ] Set MONGODB_URI
  - [ ] Set JWT_SECRET (change to random string!)
  - [ ] Set JWT_EXPIRE (default: 7d)
  - [ ] Set FRONTEND_URL

## Database Setup ✓

### Option A: Local MongoDB
- [ ] Start MongoDB service
  - Windows: `net start MongoDB`
  - Mac: `brew services start mongodb-community`
  - Linux: `sudo systemctl start mongod`

- [ ] Verify MongoDB is running
  - Check with: `mongo` or `mongosh` command

### Option B: MongoDB Atlas (Cloud)
- [ ] Sign up at mongodb.com/cloud/atlas
- [ ] Create free cluster
- [ ] Whitelist IP address (0.0.0.0/0 for dev)
- [ ] Create database user
- [ ] Get connection string
- [ ] Update MONGODB_URI in .env

## Start Server ✓

- [ ] Start development server
  ```bash
  npm run dev
  ```

- [ ] Verify server started
  - Should see: "UniBonds API Server Started"
  - Should see: "MongoDB Connected"
  - Should be on: http://localhost:5000

- [ ] Test health endpoint
  - Open: http://localhost:5000/api/health
  - Should return: `{"success":true,"message":"Server is running"}`

## Test Backend API ✓

### Test with Browser
- [ ] Open http://localhost:5000
  - Should show API info

- [ ] Open http://localhost:5000/api/health
  - Should show health status

### Test Signup
- [ ] Open `public_html/signup.html` in browser
- [ ] Fill in the form:
  - Name: Test User
  - Email: test@example.com
  - Phone: 1234567890
  - Password: password123
  - Confirm: password123
- [ ] Click Sign Up
- [ ] Should show success message
- [ ] Should redirect to index.html

### Test Login
- [ ] Open `public_html/login.html` in browser
- [ ] Enter credentials:
  - Email: test@example.com
  - Password: password123
- [ ] Click Login
- [ ] Should show success message
- [ ] Should redirect to index.html
- [ ] Check localStorage for token

### Test Dashboard
- [ ] While logged in, open `public_html/dashboard.html`
- [ ] Should see your name in navbar
- [ ] Should see profile information
- [ ] Should not redirect to login

### Test Protected Access
- [ ] Logout (clear localStorage or use logout button)
- [ ] Try to access `public_html/dashboard.html`
- [ ] Should redirect to login page

## Verify All Features ✓

- [ ] User Registration works
- [ ] User Login works
- [ ] JWT token is generated
- [ ] Token is stored in localStorage
- [ ] Protected routes require authentication
- [ ] User profile loads correctly
- [ ] Logout clears token

## Integration with Existing Site ✓

- [ ] Add login/signup links to main navigation
- [ ] Add user info display when logged in
- [ ] Add logout button
- [ ] Protect pages that need authentication
- [ ] Update API_URL if deploying

Example integration:
```html
<!-- In your main navigation -->
<nav>
  <!-- Your existing links -->
  <a href="/login.html">Login</a>
  <a href="/signup.html">Sign Up</a>
  <div id="userInfo"></div>
</nav>

<!-- Include auth utilities -->
<script src="/js/auth.js"></script>
```

## Security Checklist ✓

- [ ] Changed JWT_SECRET from default
- [ ] Using HTTPS in production
- [ ] MongoDB access restricted
- [ ] CORS configured correctly
- [ ] Rate limiting enabled
- [ ] Input validation working
- [ ] Passwords are hashed
- [ ] Tokens expire appropriately

## Production Deployment ✓

When ready to deploy:

- [ ] Update .env for production:
  - [ ] Set NODE_ENV=production
  - [ ] Use MongoDB Atlas URI
  - [ ] Generate strong JWT_SECRET
  - [ ] Set correct FRONTEND_URL
  - [ ] Change PORT if needed

- [ ] Choose hosting provider:
  - [ ] Heroku
  - [ ] AWS EC2
  - [ ] DigitalOcean
  - [ ] Railway
  - [ ] Render
  - [ ] Vercel (for API routes)

- [ ] Update frontend API_URL to production backend

- [ ] Test in production environment

## Troubleshooting ✓

If something doesn't work:

### Server Won't Start
- [ ] Check if port is already in use
- [ ] Verify all dependencies installed
- [ ] Check .env file exists and is correct
- [ ] Look at error messages in console

### Can't Connect to MongoDB
- [ ] Verify MongoDB service is running
- [ ] Check MONGODB_URI is correct
- [ ] Check network connectivity (for Atlas)
- [ ] Verify credentials (for Atlas)

### Frontend Can't Connect
- [ ] Verify backend is running
- [ ] Check API_URL in HTML files
- [ ] Check browser console for errors
- [ ] Verify CORS settings
- [ ] Check if port is accessible

### Authentication Not Working
- [ ] Check if token is being stored
- [ ] Verify JWT_SECRET is set
- [ ] Check token hasn't expired
- [ ] Look at network tab in browser
- [ ] Check API responses

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Start development server (auto-restart)
npm run dev

# Start production server
npm start

# Check Node version
node --version

# Check npm version
npm --version

# Start MongoDB (Windows)
net start MongoDB

# Start MongoDB (Mac)
brew services start mongodb-community

# Start MongoDB (Linux)
sudo systemctl start mongod

# Check MongoDB status
mongod --version
```

## File Locations

- Backend files: Root directory
- Frontend files: `public_html/`
- Configuration: `.env`
- Documentation: `README.md`, `SETUP_GUIDE.md`, etc.

## Support Resources

- [ ] Read README.md for full API documentation
- [ ] Check SETUP_GUIDE.md for detailed setup
- [ ] Use QUICK_START.md for quick reference
- [ ] Review PROJECT_SUMMARY.md for overview
- [ ] Test with test-api.http file

## Success Indicators

You'll know everything is working when:

✅ Server starts without errors
✅ MongoDB connects successfully
✅ Health endpoint returns success
✅ Signup creates new user
✅ Login returns JWT token
✅ Dashboard loads user profile
✅ Protected routes redirect when not logged in
✅ Logout clears authentication

---

## 🎉 All Set!

Once all items are checked, your authentication system is fully operational!

Start building your UniBonds features on top of this foundation.

**Next:** Add bond listings, investment tracking, or other business features!

---

**Need Help?**
- Check console for error messages
- Review documentation files
- Verify all configuration settings
- Test each component individually

