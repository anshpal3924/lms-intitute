# 🎓 LMS Institute - Advanced Learning Management System

<div align="center">

![LMS Institute](https://img.shields.io/badge/LMS-Institute-blue?style=for-the-badge&logo=education)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

**A comprehensive, scalable Learning Management System built with modern technologies**

[Live Demo](#) | [Documentation](#) | [API Docs](#)

</div>

---

## 📋 Table of Contents

- [🔍 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🏗️ System Architecture](#️-system-architecture)
- [💻 Tech Stack](#-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Installation & Setup](#️-installation--setup)
- [🔧 Configuration](#-configuration)
- [🔐 Authentication](#-authentication)
- [💳 Payment Integration](#-payment-integration)
- [📊 Admin Features](#-admin-features)
- [🔄 API Documentation](#-api-documentation)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🔍 Overview

**LMS Institute** is a full-stack Learning Management System designed for modern educational institutions and online learning platforms. Built with TypeScript and cutting-edge technologies, it provides a robust, scalable solution for course management, student enrollment, progress tracking, and administrative oversight.

### 🎯 Project Goals
- **Scalability**: Handle thousands of concurrent users
- **Security**: Enterprise-grade security with JWT, OAuth, and encrypted video content
- **Performance**: Optimized with Redis caching and CDN integration
- **User Experience**: Intuitive design with real-time updates
- **Mobile-First**: Responsive design for all devices

---

## ✨ Key Features

### 👨‍🎓 Student Features
- 🔐 **Multi-Authentication**: Email/Password, Google OAuth, GitHub OAuth
- 📚 **Course Catalog**: Browse, search, and filter courses
- 🎥 **Video Learning**: Secure video streaming with DRM protection
- 💰 **Seamless Payments**: Stripe integration for course purchases
- 📊 **Progress Tracking**: Real-time course completion tracking
- ⭐ **Reviews & Ratings**: Course feedback system
- 💬 **Q&A System**: Interactive question-answer platform
- 🔔 **Real-time Notifications**: Socket.IO powered updates
- 📱 **Mobile Responsive**: Perfect experience across all devices

### 👨‍💼 Admin Features
- 📈 **Advanced Dashboard**: Comprehensive analytics and insights
- 📚 **Course Management**: Create, edit, and manage courses
- 👥 **User Management**: Student and instructor administration
- 💰 **Order Tracking**: Payment and enrollment monitoring
- 📊 **Analytics**: Revenue, user engagement, and course statistics
- 🎨 **Content Management**: Hero sections, FAQs, categories
- 📧 **Email System**: Automated notifications and communications
- 🔒 **Role-based Access**: Granular permission system

### 🏗️ Technical Features
- ⚡ **High Performance**: Redis caching and optimized queries
- 🔒 **Secure Video**: VdoCipher DRM encryption
- 🌩️ **Cloud Storage**: Cloudinary integration for media
- 📱 **Real-time Updates**: Socket.IO implementation
- 🔍 **Advanced Search**: Elasticsearch-powered search
- 📊 **Rate Limiting**: API protection and abuse prevention
- 🛡️ **Security**: HTTPS, CORS, Input validation, SQL injection protection

---

## 🏗️ System Architecture

```mermaid
graph TB
    subgraph "Client Layer"
        A[Next.js Frontend]
        B[React Components]
        C[Redux Store]
        D[Socket.IO Client]
    end
    
    subgraph "API Gateway"
        E[Express.js Server]
        F[Authentication Middleware]
        G[Rate Limiting]
        H[CORS Handling]
    end
    
    subgraph "Business Logic"
        I[User Controller]
        J[Course Controller]
        K[Order Controller]
        L[Analytics Controller]
    end
    
    subgraph "Data Layer"
        M[(MongoDB)]
        N[(Redis Cache)]
        O[Cloudinary CDN]
        P[VdoCipher DRM]
    end
    
    subgraph "External Services"
        Q[Stripe Payment]
        R[Email Service]
        S[OAuth Providers]
        T[Socket.IO Server]
    end
    
    A --> E
    B --> C
    C --> A
    D --> T
    E --> F
    F --> G
    G --> H
    H --> I
    H --> J
    H --> K
    H --> L
    I --> M
    J --> M
    K --> M
    L --> M
    I --> N
    J --> N
    J --> O
    J --> P
    K --> Q
    I --> R
    F --> S
```

### 📁 Project Structure
```
lms-institute/
├── client/                    # Next.js Frontend
│   ├── app/                   # App Router (Next.js 13+)
│   │   ├── (routes)/         # Public routes
│   │   ├── admin/            # Admin dashboard
│   │   ├── components/       # Reusable components
│   │   ├── hooks/            # Custom React hooks
│   │   └── utils/            # Utility functions
│   ├── redux/                # State management
│   │   ├── features/         # Feature-based slices
│   │   └── store.ts          # Redux store configuration
│   └── public/               # Static assets
│
├── server/                   # Node.js Backend
│   ├── controllers/          # Request handlers
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   ├── services/            # Business logic
│   ├── utils/               # Helper functions
│   └── build/               # Compiled JavaScript
│
└── docs/                    # Documentation
```

---

## 💻 Tech Stack

### Frontend
- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Material UI
- **State Management**: Redux Toolkit
- **Authentication**: NextAuth.js
- **Real-time**: Socket.IO Client
- **HTTP Client**: Axios
- **Form Handling**: Formik + Yup

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB + Mongoose
- **Caching**: Redis (Upstash)
- **Authentication**: JWT + OAuth
- **File Upload**: Cloudinary
- **Video**: VdoCipher DRM
- **Payments**: Stripe
- **Email**: Nodemailer
- **Real-time**: Socket.IO

### DevOps & Tools
- **Version Control**: Git + GitHub
- **Package Manager**: npm
- **Build Tool**: TypeScript Compiler
- **Development**: ts-node-dev
- **Environment**: dotenv
- **API Testing**: Postman/Thunder Client

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB database
- Redis instance
- Git

### 1-Minute Setup
```bash
# Clone the repository
git clone https://github.com/anshpal3924/lms-intitute.git
cd lms-intitute

# Install dependencies for both client and server
npm run install:all

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development servers
npm run dev
```

---

## ⚙️ Installation & Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/anshpal3924/lms-intitute.git
cd lms-intitute
```

### Step 2: Install Dependencies

#### For Client (Frontend)
```bash
cd client
npm install
```

#### For Server (Backend)
```bash
cd ../server
npm install
```

### Step 3: Database Setup

#### MongoDB Setup
1. **Local MongoDB**:
   ```bash
   # Install MongoDB Community Edition
   # Start MongoDB service
   mongod
   ```

2. **MongoDB Atlas** (Recommended):
   - Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create new cluster
   - Get connection string

#### Redis Setup
1. **Local Redis**:
   ```bash
   # Install Redis
   redis-server
   ```

2. **Redis Cloud** (Recommended):
   - Sign up at [Upstash](https://upstash.com/)
   - Create Redis database
   - Get connection URL

---

## 🔧 Configuration

### Environment Variables

#### Client Environment (.env.local)
```bash
# Client Configuration
NEXT_PUBLIC_SERVER_URI=http://localhost:8000
NEXT_PUBLIC_SOCKET_SERVER_URI=http://localhost:8000

# Authentication (NextAuth.js)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

#### Server Environment (.env)
```bash
# Server Configuration
PORT=8000
NODE_ENV=development
ORIGIN=http://localhost:3000

# Database
DB_URL=mongodb://localhost:27017/lms-institute
# Or MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/lms-institute

# Redis
REDIS_URL=redis://localhost:6379
# Or Upstash: redis://user:password@host:port

# JWT Secrets
ACTIVATION_SECRET=your-activation-secret
ACCESS_TOKEN=your-access-token-secret
REFRESH_TOKEN=your-refresh-token-secret
ACCESS_TOKEN_EXPIRE=15
REFRESH_TOKEN_EXPIRE=7

# Cloudinary (Media Storage)
CLOUD_NAME=your-cloudinary-name
CLOUD_API_KEY=your-cloudinary-api-key
CLOUD_SECRET_KEY=your-cloudinary-secret

# Email Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SERVICE=gmail
SMTP_MAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# VdoCipher (Video DRM)
VDOCIPHER_API_SECRET=your-vdocipher-secret

# Stripe Payment
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-public-key
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
```

### Getting API Keys

#### 1. Cloudinary Setup
1. Visit [Cloudinary](https://cloudinary.com/)
2. Create free account
3. Get API credentials from dashboard

#### 2. VdoCipher Setup
1. Visit [VdoCipher](https://www.vdocipher.com/)
2. Create account
3. Get API secret from dashboard

#### 3. Stripe Setup
1. Visit [Stripe](https://stripe.com/)
2. Create account
3. Get API keys from dashboard
4. Configure webhooks

#### 4. OAuth Setup
1. **Google OAuth**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create project and enable Google+ API
   - Create OAuth 2.0 credentials

2. **GitHub OAuth**:
   - Go to GitHub Settings > Developer settings
   - Create new OAuth App
   - Get Client ID and Secret

---

## 🔐 Authentication

### Supported Authentication Methods
1. **Email/Password**: Traditional signup with email verification
2. **Google OAuth**: One-click Google authentication
3. **GitHub OAuth**: Developer-friendly GitHub login
4. **JWT Tokens**: Secure token-based authentication

### Authentication Flow
```mermaid
sequenceDiagram
    participant U as User
    participant C as Client
    participant S as Server
    participant DB as Database
    participant E as Email Service

    U->>C: Login Request
    C->>S: POST /api/auth/login
    S->>DB: Validate Credentials
    DB-->>S: User Data
    S->>S: Generate JWT Tokens
    S-->>C: Access & Refresh Tokens
    C-->>U: Login Success
    
    Note over C,S: Auto-refresh tokens before expiry
```

---

## 💳 Payment Integration

### Stripe Configuration
1. **Test Mode Setup**:
   ```bash
   # Use test API keys
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

2. **Webhook Configuration**:
   ```bash
   # Install Stripe CLI
   stripe login
   stripe listen --forward-to localhost:8000/api/payment/webhook
   ```

3. **Test Card Numbers**:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

---

## 📊 Admin Features

### Dashboard Analytics
- **User Metrics**: Registration trends, active users
- **Course Analytics**: Enrollment rates, completion rates
- **Revenue Tracking**: Sales reports, payment analytics
- **Engagement Stats**: Video watch time, quiz completion

### Course Management
```bash
# Access admin dashboard
http://localhost:3000/admin

# Default admin credentials (after seeding)
Email: admin@lms.com
Password: admin123
```

---

## 🔄 API Documentation

### Authentication Endpoints
```bash
POST   /api/auth/register          # User registration
POST   /api/auth/activate-user     # Email verification
POST   /api/auth/login             # User login
POST   /api/auth/logout            # User logout
POST   /api/auth/refresh-token     # Refresh access token
POST   /api/auth/forgot-password   # Password reset request
PUT    /api/auth/reset-password    # Password reset
```

### Course Endpoints
```bash
GET    /api/courses               # Get all courses
GET    /api/courses/:id           # Get single course
POST   /api/courses               # Create course (Admin)
PUT    /api/courses/:id           # Update course (Admin)
DELETE /api/courses/:id           # Delete course (Admin)
GET    /api/courses/search        # Search courses
```

### User Endpoints
```bash
GET    /api/users/me              # Get current user
PUT    /api/users/me              # Update profile
GET    /api/users/my-courses      # Get enrolled courses
POST   /api/users/upload-avatar   # Upload profile picture
```

### Order Endpoints
```bash
POST   /api/orders/create         # Create order
GET    /api/orders/my-orders      # Get user orders
GET    /api/orders/:id            # Get order details
```

---

## 🧪 Testing

### Running Tests
```bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage
```

### API Testing with Postman
1. Import the Postman collection from `/docs/postman/`
2. Set environment variables
3. Run automated tests

---

## 🚀 Deployment

### Development Mode
```bash
# Start both client and server
npm run dev

# Or start individually
cd client && npm run dev
cd server && npm run dev
```

### Production Build
```bash
# Build client
cd client && npm run build

# Build server
cd server && npm run build

# Start production
npm start
```

### Deployment Platforms

#### 1. Vercel (Client)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy client
cd client
vercel --prod
```

#### 2. Railway/Heroku (Server)
```bash
# Add buildpack for Node.js
# Set environment variables
# Connect GitHub repository
```

#### 3. Docker Deployment
```dockerfile
# Dockerfile provided in repository
docker build -t lms-institute .
docker run -p 3000:3000 -p 8000:8000 lms-institute
```

---

## 🤝 Contributing

### Development Workflow
1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration
- **Prettier**: Code formatting
- **Conventional Commits**: Commit message format

### Development Setup
```bash
# Install development dependencies
npm install --dev

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing React framework
- **Vercel** for hosting and deployment platform
- **MongoDB** for the robust database solution
- **Stripe** for seamless payment processing
- **VdoCipher** for secure video streaming

---

## 📞 Support & Contact

- **Developer**: Ansh Pal
- **Email**: anshpal3924@gmail.com
- **GitHub**: [@anshpal3924](https://github.com/anshpal3924)
- **LinkedIn**: [Ansh Pal](https://linkedin.com/in/anshpal3924)

---

<div align="center">

**⭐ Star this repository if it helped you!**

![GitHub stars](https://img.shields.io/github/stars/anshpal3924/lms-intitute?style=social)
![GitHub forks](https://img.shields.io/github/forks/anshpal3924/lms-intitute?style=social)

</div>
