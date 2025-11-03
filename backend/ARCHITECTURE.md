# 🏗️ System Architecture

## Overview

UniBonds backend follows a layered MVC (Model-View-Controller) architecture with JWT-based authentication.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         FRONTEND                            │
│  (HTML/CSS/JavaScript - public_html/)                       │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌────────────┐              │
│  │ Login    │  │ Signup   │  │ Dashboard  │              │
│  │ Page     │  │ Page     │  │ (Protected)│              │
│  └────┬─────┘  └────┬─────┘  └──────┬─────┘              │
│       │             │                │                     │
│       │             │                │                     │
│       └─────────────┴────────────────┘                     │
│                     │                                       │
│              ┌──────▼───────┐                              │
│              │   auth.js    │                              │
│              │  (Utilities) │                              │
│              └──────┬───────┘                              │
└─────────────────────┼───────────────────────────────────────┘
                      │
                      │ HTTP/HTTPS
                      │ (JSON)
                      │
┌─────────────────────▼───────────────────────────────────────┐
│                      BACKEND API                            │
│               (Node.js + Express)                           │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                  server.js (Entry Point)             │  │
│  │  - Initialize Express                                │  │
│  │  - Configure Middleware                              │  │
│  │  - Setup Routes                                      │  │
│  │  - Start Server                                      │  │
│  └───────────────────┬──────────────────────────────────┘  │
│                      │                                      │
│  ┌───────────────────▼──────────────────────────────────┐  │
│  │               MIDDLEWARE LAYER                        │  │
│  │                                                       │  │
│  │  ┌─────────┐ ┌─────────┐ ┌──────────┐ ┌──────────┐ │  │
│  │  │ Helmet  │ │  CORS   │ │   Rate   │ │  JSON    │ │  │
│  │  │Security │ │         │ │ Limiting │ │ Parser   │ │  │
│  │  └─────────┘ └─────────┘ └──────────┘ └──────────┘ │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │         JWT Authentication                      │ │  │
│  │  │         (middleware/auth.js)                    │ │  │
│  │  │  - Verify Token                                 │ │  │
│  │  │  - Extract User                                 │ │  │
│  │  │  - Check Permissions                            │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  └───────────────────┬──────────────────────────────────┘  │
│                      │                                      │
│  ┌───────────────────▼──────────────────────────────────┐  │
│  │                  ROUTES LAYER                         │  │
│  │                                                       │  │
│  │  /api/auth/signup      ─────┐                        │  │
│  │  /api/auth/login       ─────┤                        │  │
│  │  /api/auth/me          ─────┼───► authRoutes.js     │  │
│  │  /api/auth/updateprofile ───┤                        │  │
│  │  /api/auth/updatepassword ──┘                        │  │
│  │                                                       │  │
│  └───────────────────┬──────────────────────────────────┘  │
│                      │                                      │
│  ┌───────────────────▼──────────────────────────────────┐  │
│  │              CONTROLLERS LAYER                        │  │
│  │          (Business Logic)                             │  │
│  │                                                       │  │
│  │  authController.js:                                   │  │
│  │  ├─ signup()          - Register new user            │  │
│  │  ├─ login()           - Authenticate user            │  │
│  │  ├─ getMe()           - Get current user             │  │
│  │  ├─ updateProfile()   - Update user info             │  │
│  │  └─ updatePassword()  - Change password              │  │
│  │                                                       │  │
│  └───────────────────┬──────────────────────────────────┘  │
│                      │                                      │
│  ┌───────────────────▼──────────────────────────────────┐  │
│  │                 MODELS LAYER                          │  │
│  │          (Data Structures)                            │  │
│  │                                                       │  │
│  │  User.js (Mongoose Schema):                          │  │
│  │  ├─ name           (String, required)                │  │
│  │  ├─ email          (String, unique, required)        │  │
│  │  ├─ password       (String, hashed, required)        │  │
│  │  ├─ phone          (String, optional)                │  │
│  │  ├─ role           (String, enum: user/admin)        │  │
│  │  ├─ isVerified     (Boolean)                         │  │
│  │  ├─ createdAt      (Date, auto)                      │  │
│  │  └─ updatedAt      (Date, auto)                      │  │
│  │                                                       │  │
│  └───────────────────┬──────────────────────────────────┘  │
│                      │                                      │
└──────────────────────┼──────────────────────────────────────┘
                       │
                       │ Mongoose ODM
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                     DATABASE                                │
│                     (MongoDB)                               │
│                                                             │
│  Collections:                                               │
│  └─ users                                                   │
│     ├─ _id: ObjectId                                        │
│     ├─ name: "John Doe"                                     │
│     ├─ email: "john@example.com"                            │
│     ├─ password: "$2a$10$hashed..."                         │
│     ├─ phone: "1234567890"                                  │
│     ├─ role: "user"                                         │
│     ├─ isVerified: false                                    │
│     ├─ createdAt: ISODate(...)                              │
│     └─ updatedAt: ISODate(...)                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Request Flow

### 1. User Registration Flow

```
User submits signup form
       │
       ▼
signup.html captures form data
       │
       ▼
POST /api/auth/signup
       │
       ▼
Express receives request
       │
       ▼
express-validator validates input
       │
       ▼
authController.signup()
       │
       ├─ Check if user exists
       │
       ├─ Hash password (bcrypt)
       │
       ├─ Create user in DB
       │
       ├─ Generate JWT token
       │
       └─ Return user data + token
              │
              ▼
Frontend stores token in localStorage
       │
       ▼
User redirected to dashboard
```

### 2. User Login Flow

```
User submits login form
       │
       ▼
login.html captures credentials
       │
       ▼
POST /api/auth/login
       │
       ▼
Express receives request
       │
       ▼
express-validator validates input
       │
       ▼
authController.login()
       │
       ├─ Find user by email
       │
       ├─ Compare password (bcrypt)
       │
       ├─ Generate JWT token
       │
       └─ Return user data + token
              │
              ▼
Frontend stores token in localStorage
       │
       ▼
User redirected to dashboard
```

### 3. Protected Route Access Flow

```
User accesses dashboard.html
       │
       ▼
auth.js checks if logged in
       │
       ├─ No token? ──► Redirect to login.html
       │
       └─ Token exists
              │
              ▼
GET /api/auth/me with Bearer token
       │
       ▼
middleware/auth.js
       │
       ├─ Extract token from header
       │
       ├─ Verify token with JWT_SECRET
       │
       ├─ Decode user ID
       │
       ├─ Find user in database
       │
       └─ Attach user to req.user
              │
              ▼
authController.getMe()
       │
       └─ Return user data
              │
              ▼
Frontend displays user info
```

## Component Details

### Frontend Components

```
public_html/
├── login.html          # Login interface
│   ├── Email input
│   ├── Password input
│   └── Submit → POST /api/auth/login
│
├── signup.html         # Registration interface
│   ├── Name input
│   ├── Email input
│   ├── Phone input
│   ├── Password input
│   ├── Confirm password
│   └── Submit → POST /api/auth/signup
│
├── dashboard.html      # Protected page
│   ├── User info display
│   ├── Profile section
│   └── Requires authentication
│
└── js/
    └── auth.js         # Authentication utilities
        ├── isLoggedIn()
        ├── getCurrentUser()
        ├── getAuthToken()
        ├── logout()
        ├── authenticatedFetch()
        └── updateProfile()
```

### Backend Components

```
Backend/
├── server.js           # Application entry
│   ├── Initialize Express
│   ├── Connect to MongoDB
│   ├── Load middleware
│   ├── Mount routes
│   └── Start server
│
├── config/
│   └── db.js           # MongoDB connection
│       └── connectDB()
│
├── models/
│   └── User.js         # User schema
│       ├── Schema definition
│       ├── Password hashing hook
│       └── Password comparison method
│
├── controllers/
│   └── authController.js
│       ├── signup()
│       ├── login()
│       ├── getMe()
│       ├── updateProfile()
│       └── updatePassword()
│
├── routes/
│   └── authRoutes.js
│       ├── POST /signup
│       ├── POST /login
│       ├── GET /me (protected)
│       ├── PUT /updateprofile (protected)
│       └── PUT /updatepassword (protected)
│
├── middleware/
│   ├── auth.js
│   │   ├── protect() - Verify JWT
│   │   └── authorize() - Check roles
│   │
│   └── errorHandler.js
│       └── Global error handler
│
└── utils/
    └── generateToken.js
        └── Create JWT token
```

## Data Flow Diagram

```
┌──────────┐
│  Client  │
│ (Browser)│
└────┬─────┘
     │
     │ 1. HTTP Request (JSON)
     │
     ▼
┌─────────────┐
│   Express   │
│   Server    │
└──────┬──────┘
       │
       │ 2. Route to Controller
       │
       ▼
┌────────────────┐
│  Controller    │
│ (Business      │
│  Logic)        │
└────────┬───────┘
         │
         │ 3. Database Query
         │
         ▼
┌──────────────────┐
│   Mongoose       │
│   (ODM)          │
└────────┬─────────┘
         │
         │ 4. MongoDB Query
         │
         ▼
┌──────────────────┐
│   MongoDB        │
│   Database       │
└────────┬─────────┘
         │
         │ 5. Return Data
         │
         ▼
┌──────────────────┐
│   Controller     │
│   (Format        │
│    Response)     │
└────────┬─────────┘
         │
         │ 6. JSON Response
         │
         ▼
┌──────────────────┐
│   Client         │
│   (Update UI)    │
└──────────────────┘
```

## Security Layers

```
┌─────────────────────────────────────────┐
│         REQUEST SECURITY                │
│                                         │
│  Layer 1: Rate Limiting                 │
│  └─ Max 100 requests per 10 minutes    │
│                                         │
│  Layer 2: CORS                          │
│  └─ Allow specific origins only        │
│                                         │
│  Layer 3: Helmet                        │
│  └─ Security headers                    │
│     ├─ X-Content-Type-Options          │
│     ├─ X-Frame-Options                 │
│     └─ X-XSS-Protection                │
│                                         │
│  Layer 4: Input Validation              │
│  └─ express-validator                   │
│     ├─ Email format                     │
│     ├─ Password length                  │
│     └─ Required fields                  │
│                                         │
│  Layer 5: Authentication                │
│  └─ JWT verification                    │
│     ├─ Token existence                  │
│     ├─ Token validity                   │
│     └─ User existence                   │
│                                         │
│  Layer 6: Authorization                 │
│  └─ Role-based access                   │
│     └─ User/Admin permissions           │
│                                         │
└─────────────────────────────────────────┘
```

## Database Schema

```
users Collection
┌──────────────────────────────────────┐
│ _id: ObjectId (Auto)                 │
│ name: String (Required)              │
│ email: String (Unique, Required)     │
│ password: String (Hashed, Required)  │
│ phone: String (Optional)             │
│ role: Enum ["user", "admin"]         │
│ isVerified: Boolean (Default: false) │
│ resetPasswordToken: String           │
│ resetPasswordExpire: Date            │
│ createdAt: Date (Auto)               │
│ updatedAt: Date (Auto)               │
└──────────────────────────────────────┘

Indexes:
├─ email (unique)
└─ createdAt (for sorting)
```

## Authentication Flow Sequence

```
┌──────┐         ┌──────────┐       ┌────────────┐      ┌──────────┐
│Client│         │ Express  │       │Controller  │      │ Database │
└──┬───┘         └────┬─────┘       └─────┬──────┘      └────┬─────┘
   │                  │                    │                  │
   │ POST /signup     │                    │                  │
   ├─────────────────>│                    │                  │
   │                  │                    │                  │
   │                  │ Validate Input     │                  │
   │                  ├───────────────────>│                  │
   │                  │                    │                  │
   │                  │                    │ Check if exists  │
   │                  │                    ├─────────────────>│
   │                  │                    │                  │
   │                  │                    │ User not found   │
   │                  │                    │<─────────────────┤
   │                  │                    │                  │
   │                  │                    │ Hash password    │
   │                  │                    │ (bcrypt)         │
   │                  │                    │                  │
   │                  │                    │ Create user      │
   │                  │                    ├─────────────────>│
   │                  │                    │                  │
   │                  │                    │ User created     │
   │                  │                    │<─────────────────┤
   │                  │                    │                  │
   │                  │                    │ Generate JWT     │
   │                  │                    │                  │
   │                  │ Return user+token  │                  │
   │                  │<───────────────────┤                  │
   │                  │                    │                  │
   │ 201 Created      │                    │                  │
   │<─────────────────┤                    │                  │
   │ + JWT Token      │                    │                  │
   │                  │                    │                  │
   │ Store token      │                    │                  │
   │ in localStorage  │                    │                  │
   │                  │                    │                  │
```

## Environment Configuration

```
.env File Structure
┌────────────────────────────────────────┐
│                                        │
│  PORT ──────────┐                      │
│                 ├──► Server Config     │
│  NODE_ENV ──────┘                      │
│                                        │
│  MONGODB_URI ───┐                      │
│                 └──► Database Config   │
│                                        │
│  JWT_SECRET ────┐                      │
│                 ├──► Auth Config       │
│  JWT_EXPIRE ────┘                      │
│                                        │
│  FRONTEND_URL ──┐                      │
│                 └──► CORS Config       │
│                                        │
└────────────────────────────────────────┘
```

## Scalability Considerations

```
Current Architecture:
├─ Single server instance
├─ Direct MongoDB connection
└─ In-memory rate limiting

Future Enhancements:
├─ Load balancer
│  └─ Multiple server instances
│
├─ Redis
│  ├─ Session storage
│  ├─ Distributed rate limiting
│  └─ Cache layer
│
├─ Database
│  ├─ MongoDB replica set
│  └─ Read replicas
│
├─ CDN
│  └─ Static assets
│
└─ Microservices
   ├─ Auth service
   ├─ User service
   ├─ Bond service
   └─ Payment service
```

---

This architecture provides a solid foundation for building a secure, scalable financial application.

The modular design allows for easy extension and maintenance as your application grows.

