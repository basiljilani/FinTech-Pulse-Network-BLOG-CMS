# FinTech Pulse Network - Blog CMS

comprehensive documentation that includes:

📚 Table of Contents for easy navigation
✨ Detailed Features breakdown
🛠 Complete Tech Stack information
📁 Clear Project Structure
🚀 Step-by-step Getting Started guide
⚙️ Configuration details for both frontend and backend
📡 API Documentation
🎨 Frontend Components overview
🗄️ Database Schema
📦 Deployment information
🤝 Contributing guidelines

A modern financial content management system that combines AI-powered content generation with real-time market insights.

## 📚 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Frontend Components](#frontend-components)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

- **Content Management**
  - AI-assisted article creation
  - Rich text editor with financial templates
  - Category-based organization
  - Draft and publish workflow

- **Market Integration**
  - Real-time market data using Yahoo Finance API
  - Interactive market tickers
  - Financial charts and analytics

- **User Experience**
  - Responsive modern UI with Tailwind CSS
  - Dark mode support
  - Animated transitions using Framer Motion
  - Social sharing capabilities

- **Authentication & Security**
  - Secure user authentication
  - Role-based access control
  - Protected API endpoints

## 🛠 Tech Stack

- **Frontend**
  - React 18.2.0 with TypeScript
  - Vite 5.1.4 for build tooling
  - Tailwind CSS 3.4.1 for styling
  - Framer Motion for animations
  - Zustand for state management

- **Backend**
  - Node.js with Express
  - MongoDB for database
  - REST API architecture
  - JWT authentication

## 📁 Project Structure

```
FinTech-Pulse-Network/
├── src/                      # Frontend source code
│   ├── components/           # Reusable UI components
│   │   ├── AnimatedBackground/
│   │   ├── CategoryCard/
│   │   ├── MarketTicker/
│   │   └── ...
│   ├── pages/               # Page components
│   │   ├── Home/
│   │   ├── Insights/
│   │   ├── Dashboard/
│   │   └── ...
│   ├── config/              # Frontend configuration
│   ├── lib/                 # Utilities and hooks
│   └── types/               # TypeScript type definitions
│
├── backend/                 # Backend source code
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── uploads/            # File uploads
│   └── server.js           # Express server setup
│
├── public/                 # Static assets
└── dist/                   # Production build output
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/basiljilani/FinTech-Pulse-Network-BLOG-CMS.git
cd FinTech-Pulse-Network-BLOG-CMS
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Create environment files:
   - Copy `.env.example` to `.env` in both root and backend directories
   - Update the environment variables as needed

5. Start MongoDB:
```bash
brew services start mongodb-community
```

6. Start the backend server:
```bash
cd backend
node server.js
```

7. Start the frontend development server:
```bash
cd ..
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5001

## ⚙️ Configuration

### Frontend Environment Variables (.env)
```env
VITE_APP_TITLE=FinTech Pulse Network
VITE_API_URL=http://localhost:5001/api
VITE_ENABLE_SOCIAL_SHARE=true
VITE_DISCORD_WEBHOOK_URL=your_discord_webhook_url
```

### Backend Environment Variables (backend/.env)
```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/fintech-pulse
NODE_ENV=development
```

## 📡 API Documentation

### Articles API

#### GET /api/articles
- Returns all published articles
- Query parameters:
  - category: Filter by category
  - search: Search in title and content

#### POST /api/articles
- Creates a new article
- Required fields:
  - title: string
  - content: string
  - category: string
  - excerpt: string

#### GET /api/articles/:id
- Returns a specific article by ID

#### PUT /api/articles/:id
- Updates an existing article

#### DELETE /api/articles/:id
- Deletes an article

## 🎨 Frontend Components

### Key Components
- `<AnimatedBackground />`: Dynamic background animations
- `<CategoryCard />`: Displays article categories
- `<MarketTicker />`: Real-time market data display
- `<Hero />`: Landing page hero section
- `<ArticleManager />`: Article CRUD interface

### Pages
- `Home`: Landing page with featured content
- `Insights`: Article listing and filtering
- `Dashboard`: Admin dashboard for content management
- `ArticleView`: Individual article display

## 🗄️ Database Schema

### Article Model
```typescript
{
  title: string,
  content: string,
  excerpt: string,
  category: string,
  author: {
    name: string,
    role: string,
    avatar?: string
  },
  publishDate: Date,
  lastModified: Date,
  status: 'draft' | 'published',
  tags: string[]
}
```

## 📦 Deployment

The application is configured for deployment on AWS:
1. Frontend: AWS Amplify
2. Backend: EC2 or ECS
3. Database: MongoDB Atlas

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - See LICENSE file for details
