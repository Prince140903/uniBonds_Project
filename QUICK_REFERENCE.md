# 🚀 UniBonds - Quick Reference Guide

## ⚡ Quick Start (3 Steps)

### Step 1: Start Backend
```bash
cd Backend
node server.js
```
✅ Backend running on `http://localhost:5000`

### Step 2: Start Frontend
- Open `public_html` folder in VS Code
- Right-click `index.html` → "Open with Live Server"
- ✅ Frontend running on `http://127.0.0.1:5501`

### Step 3: Access Features
- Home: `http://127.0.0.1:5501/index.html`
- Login: `http://127.0.0.1:5501/login.html` 👈 **START HERE**
- Signup: `http://127.0.0.1:5501/signup.html`
- Explore Bonds: `http://127.0.0.1:5501/explore-bonds.html`

---

## 🔑 Login & Signup

### Where to Find Them?

**Option 1: Direct URL**
- Login: `http://127.0.0.1:5501/login.html`
- Signup: `http://127.0.0.1:5501/signup.html`

**Option 2: Navigation Bar**
- Look for **"Log In"** button (top-right)
- Or click **"Sign Up"** button

### Test Account
```
Email: test@example.com
Password: test123
Name: Test User
```

---

## 📊 Features & Pages

| Page | URL | Status | Features |
|------|-----|--------|----------|
| **Home** | `/index.html` | ✅ Ready | Landing page with hero section |
| **Login** | `/login.html` | ✅ Ready | User authentication |
| **Signup** | `/signup.html` | ✅ Ready | User registration |
| **Explore Bonds** | `/explore-bonds.html` | ✅ Ready | Search, filter, sort bonds |
| **Bond Details** | `/bond-details.html?id=XXX` | ✅ Ready | Comprehensive bond info |
| **Bonds IPO** | `/bonds-ipo.html` | ⚠️ Coming Soon | IPO listings |
| **Dashboard** | `/dashboard.html` | ⚠️ Pending | User portfolio |

---

## 🎯 How Data Flows (Frontend → Backend)

### 1. **User Signup**
```
User fills form → POST /api/auth/signup → Account created → Auto-login → JWT token stored
```

### 2. **User Login**
```
User enters credentials → POST /api/auth/login → JWT token returned → Stored in localStorage
```

### 3. **Fetch Bonds**
```
Page loads → GET /api/bonds?filters → Backend queries MongoDB → Returns bonds array → Display cards
```

### 4. **View Bond Details**
```
Click bond card → GET /api/bonds/:id → Backend finds bond → Returns full details → Display tabs
```

---

## 🔧 Configuration

### Change Backend URL

**File:** `public_html/js/config.js`

```javascript
// Development
const API_BASE_URL = 'http://localhost:5000/api';

// Production (change when deploying)
const API_BASE_URL = 'https://your-domain.com/api';
```

That's it! All pages use this config automatically. 🎉

---

## 🔐 Authentication States

### Guest (Not Logged In)
- Shows: "Log In" and "Sign Up" buttons
- Can: Browse bonds, view details
- Cannot: Invest in bonds

### Logged In
- Shows: User avatar with dropdown menu
- Can: Everything + Invest in bonds
- Menu: Dashboard, Profile, Logout

---

## 📝 Adding Sample Bonds

### Method 1: Via API (Postman/Thunder Client)

```http
POST http://localhost:5000/api/bonds
Content-Type: application/json
Authorization: Bearer YOUR_JWT_TOKEN

{
  "issuerName": "HDFC Bank",
  "securityName": "HDFC Bank NCD Series 1",
  "isin": "INE040A08015",
  "faceValue": 1000,
  "coupon": 8.75,
  "currentPrice": 1020,
  "yieldToMaturity": 8.25,
  "allotmentDate": "2024-01-15",
  "maturityDate": "2029-01-15",
  "totalTenure": 60,
  "remainingTenure": 48,
  "rating": "AAA",
  "ratingAgency": "CRISIL",
  "ratingDate": "2024-01-10",
  "modeOfIssue": "Public Issue",
  "ipFrequency": "Annual",
  "taxation": "Taxable",
  "security": "Secured",
  "seniority": "Senior",
  "couponType": "Fixed",
  "listingStatus": "Listed",
  "minInvestment": 10000,
  "aboutIssuer": "HDFC Bank Limited is India's leading private sector bank with a strong presence across the country."
}
```

### Method 2: Create Admin Panel (Coming Soon)
Will allow you to add/edit/delete bonds via UI.

---

## 🧪 Testing Checklist

- [ ] Start backend server
- [ ] Open frontend with Live Server
- [ ] Create account (Signup)
- [ ] Login with account
- [ ] Check user avatar appears in navbar
- [ ] Navigate to "Explore Bonds"
- [ ] Add sample bonds via API
- [ ] Refresh page and see bonds
- [ ] Click on a bond card
- [ ] View bond details page
- [ ] Test filters and search
- [ ] Click "Invest Now" (should show message)
- [ ] Logout from user menu
- [ ] Verify "Log In" button reappears

---

## 🐛 Common Issues

### "Failed to load resource: 404" for CSS/JS
**Cause:** Running from wrong directory  
**Fix:** Run Live Server from `public_html` folder

### "Network error. Please check if the server is running."
**Cause:** Backend not running or wrong URL  
**Fix:** 
1. Run `node server.js` in Backend folder
2. Check `config.js` has correct URL

### "No bonds displaying"
**Cause:** No data in database  
**Fix:** Add sample bonds via API (see above)

### Login page not found
**Cause:** Trying to access from wrong path  
**Fix:** Use `http://127.0.0.1:5501/login.html` (not `/public_html/login.html`)

---

## 📂 Key Files

```
public_html/
├── login.html              ← Login page (ready!)
├── signup.html             ← Signup page (ready!)
├── explore-bonds.html      ← Bonds listing (ready!)
├── bond-details.html       ← Bond details (ready!)
└── js/
    ├── config.js          ← API configuration ⭐
    ├── auth.js            ← Authentication utilities
    ├── explore-bonds.js   ← Bonds listing logic
    └── bond-details.js    ← Bond details logic
```

---

## 💡 Next Features to Build

1. **Bonds IPO Page** - Frontend for IPO listings
2. **Admin Panel** - Manage bonds via UI
3. **User Dashboard** - Portfolio and investments
4. **Profile Page** - User settings

---

## 🎓 How to Use This Project

### For Development
1. Follow Quick Start steps
2. Test authentication flow
3. Add sample bonds via API
4. Test all features

### For Demonstration to Client
1. Prepare sample data (bonds)
2. Create test account beforehand
3. Demo flow:
   - Show home page
   - Show explore bonds with filters
   - Click on bond to show details
   - Show login/signup functionality
   - Show authenticated state

### For Deployment
1. Update `config.js` with production URL
2. Deploy backend to server (Heroku, AWS, etc.)
3. Deploy frontend to static hosting (Netlify, Vercel, etc.)
4. Update CORS settings in backend

---

## 📞 Quick Help

**Backend not starting?**
- Check MongoDB connection
- Verify `.env` file exists
- Run `npm install` in Backend folder

**Frontend not connecting to backend?**
- Check `config.js` has correct URL
- Verify backend is running (check terminal)
- Check browser console for errors

**Need to reset?**
- Clear localStorage in browser
- Restart backend server
- Refresh frontend page

---

**🔥 You're ready to go! Check FRONTEND_GUIDE.md for detailed documentation.**

