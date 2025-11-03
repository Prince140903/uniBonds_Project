# UniBonds Frontend Guide

## 🚀 Quick Start

### 1. Starting the Backend Server

```bash
cd Backend
npm install
node server.js
```

The backend will run on `http://localhost:5000`

**Important**: Make sure MongoDB is running and you have a `.env` file in the `Backend` folder with:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5501
```

### 2. Starting the Frontend

**Option 1: From public_html folder (Recommended)**
```
1. Open VS Code
2. Navigate to the public_html folder
3. Right-click on index.html
4. Select "Open with Live Server"
5. Access at: http://127.0.0.1:5501/index.html
```

**Option 2: From root folder**
```
1. Open VS Code at the project root
2. Right-click on any HTML file
3. Select "Open with Live Server"
4. Access at: http://127.0.0.1:5501/public_html/index.html
```

---

## 📱 Accessing Key Features

### Login & Signup Pages

**Direct URLs:**
- Login: `http://127.0.0.1:5501/login.html` (or `/public_html/login.html` from root)
- Signup: `http://127.0.0.1:5501/signup.html` (or `/public_html/signup.html` from root)

**From Navigation:**
1. Click "Log In" button in the top-right corner
2. Or click "Sign Up" button for new account registration

### Explore Bonds Page

**URL:** `http://127.0.0.1:5501/explore-bonds.html`

**Features:**
- Search bonds by issuer name, ISIN, or security name
- Filter by:
  - Credit Rating (AAA, AA+, AA, A+, A)
  - Coupon Rate range
  - Yield to Maturity range
  - Coupon Type (Fixed, Floating, Zero Coupon)
  - Security (Secured, Unsecured)
  - Listing Status (Listed, Unlisted)
- Sort by various metrics
- Pagination for large datasets
- Click on any bond card to view detailed information

### Bond Details Page

**Access:** Click on any bond card from the Explore Bonds page

**Features:**
- Comprehensive bond information including:
  - Issuer details
  - Security information (ISIN, Face Value, Coupon, etc.)
  - Dates & Tenure
  - Rating information
  - Investment metrics
- Tabbed interface:
  - **Overview**: All basic bond information
  - **Financials**: Financial data table
  - **Documents**: Download rating rationale, IM/KID, synopsis
  - **About Issuer**: Company information
- Invest Now button (requires login)

### Bonds IPO Page

**URL:** `http://127.0.0.1:5501/bonds-ipo.html`
**Status:** ⚠️ Coming Soon (Backend ready, frontend pending)

---

## 🔐 Authentication Flow

### How It Works

1. **Sign Up:**
   - Fill in name, email, and password
   - System creates account and automatically logs you in
   - JWT token stored in localStorage
   - Redirects to home page

2. **Log In:**
   - Enter email and password
   - System validates credentials
   - JWT token stored in localStorage
   - Redirects to home page

3. **Logged In State:**
   - Navigation shows user avatar and name
   - Click avatar to access dropdown menu:
     - Dashboard
     - My Profile
     - Logout
   - "Invest Now" buttons become functional

4. **Logout:**
   - Click "Logout" from user menu
   - Clears token and user data from localStorage
   - Returns to guest state

---

## 🔧 API Configuration

### Changing Backend URL

Edit `public_html/js/config.js`:

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

Change this to your production URL when deploying:
```javascript
const API_BASE_URL = 'https://your-domain.com/api';
```

### API Endpoints Used

| Feature | Endpoint | Method |
|---------|----------|--------|
| Login | `/api/auth/login` | POST |
| Signup | `/api/auth/signup` | POST |
| Get User | `/api/auth/me` | GET |
| List Bonds | `/api/bonds` | GET |
| Bond Details | `/api/bonds/:id` | GET |
| Create Bond | `/api/bonds` | POST |
| Update Bond | `/api/bonds/:id` | PUT |
| Delete Bond | `/api/bonds/:id` | DELETE |

---

## 📊 Testing the System

### 1. Test Authentication

**Create a test account:**
```
Email: test@example.com
Password: test123
Name: Test User
```

### 2. Test Bonds (via API)

You can use the `Backend/test-api.http` file with REST Client extension:

**Create a sample bond:**
```http
POST http://localhost:5000/api/bonds
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE

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
  "aboutIssuer": "HDFC Bank Limited is India's leading private sector bank..."
}
```

---

## 🎨 UI Components

### Navigation Bar
- **Responsive**: Collapses to hamburger menu on mobile
- **Dropdowns**: Bonds and Other Products menus
- **User Menu**: Appears when logged in
- **Dynamic**: Updates based on authentication state

### Bond Cards
- **Hover Effects**: Scale and shadow animations
- **Rating Badges**: Color-coded based on rating
- **Responsive Grid**: Adapts to screen size
- **Click to Details**: Entire card is clickable

### Filters Sidebar
- **Collapsible**: On mobile devices
- **Clear All**: Reset all filters button
- **Apply Filters**: Update results instantly
- **Real-time Search**: Debounced search with 500ms delay

---

## 🐛 Troubleshooting

### CSS Not Loading
- **Issue**: Styles not applying
- **Solution**: Make sure you're running from the correct directory (see Quick Start)

### API Connection Failed
- **Issue**: "Network error. Please check if the server is running."
- **Solution**: 
  1. Ensure backend server is running (`node server.js`)
  2. Check MongoDB connection
  3. Verify API_BASE_URL in `config.js`
  4. Check browser console for CORS errors

### Login/Signup Not Working
- **Issue**: Can't create account or login
- **Solution**:
  1. Check backend console for errors
  2. Verify MongoDB is running
  3. Check `.env` file configuration
  4. Open browser DevTools > Network tab to see API response

### Bonds Not Displaying
- **Issue**: Empty state showing even with data
- **Solution**:
  1. Add bonds via API (see Testing section)
  2. Check backend console logs
  3. Verify API response in browser DevTools

---

## 📁 File Structure

```
public_html/
├── css/
│   ├── styles.css           # Global styles
│   ├── navigation.css       # Navbar styles
│   ├── notifications.css    # Toast notifications
│   ├── bonds.css           # Bond cards and filters
│   └── bond-details.css    # Bond details page
├── js/
│   ├── config.js           # API configuration ⭐ NEW
│   ├── auth.js             # Authentication utilities
│   ├── navigation.js       # Navigation functionality
│   ├── explore-bonds.js    # Bonds listing logic
│   └── bond-details.js     # Bond details logic
├── components/
│   └── navbar.html         # Reusable navbar component
├── index.html              # Home page
├── login.html              # Login page ✅ READY
├── signup.html             # Signup page ✅ READY
├── explore-bonds.html      # Bonds listing ✅ READY
├── bond-details.html       # Bond details ✅ READY
└── bonds-ipo.html          # IPO listing (⚠️ Coming Soon)
```

---

## 🚀 Next Steps

### Pending Features
1. **Bonds IPO Page**: Frontend implementation
2. **Admin Panel**: For managing bonds and users
3. **Dashboard**: User portfolio and investments
4. **Profile Page**: User profile management
5. **Investment Flow**: Complete investment process

### Recommended Testing Order
1. ✅ Start backend server
2. ✅ Open frontend with Live Server
3. ✅ Create an account (Signup)
4. ✅ Login with the account
5. ✅ Navigate to Explore Bonds
6. ⚠️ Add sample bonds via API
7. ✅ View bond details
8. ✅ Test filters and search
9. ✅ Test logout

---

## 💡 Pro Tips

1. **Development**: Use `http://localhost:5000` for backend, `http://127.0.0.1:5501` for frontend
2. **CORS**: Backend already configured to allow frontend requests
3. **Token Storage**: JWT stored in localStorage as `unibonds_token`
4. **Debugging**: Check browser console and Network tab for API calls
5. **State Management**: User state managed via `auth.js` utilities

---

## 📞 Support

For issues or questions:
1. Check backend console logs
2. Check browser console (F12)
3. Review `Backend/README.md` for backend-specific issues
4. Ensure all dependencies are installed (`npm install`)

---

**🎉 You're all set! Happy coding!**

