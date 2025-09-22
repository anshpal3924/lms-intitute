# Vercel Deployment Configuration

## Environment Variables Required

### Client (.env.local)
```bash
NEXT_PUBLIC_SERVER_URI=https://your-backend-url.railway.app
NEXT_PUBLIC_SOCKET_SERVER_URI=https://your-backend-url.railway.app
NEXTAUTH_URL=https://your-frontend-url.vercel.app
NEXTAUTH_SECRET=your-secure-nextauth-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

## Deployment Steps

### 1. Frontend Deployment (Vercel)
1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Select `client` folder as root directory
5. Set environment variables
6. Deploy!

### 2. Backend Deployment (Railway)
1. Visit [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project from GitHub repo
4. Select `server` folder
5. Set environment variables
6. Deploy!

## Production URLs
- Frontend: `https://lms-institute-anshpal.vercel.app`
- Backend: `https://lms-institute-api.railway.app`

## Important Notes
- Update CORS origins in server
- Update API base URLs in client
- Configure production database
- Set up production Redis
- Configure email service
- Set up Stripe webhooks for production domain