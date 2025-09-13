# UniVibe

A full-stack blogging platform for college students with AI-powered category detection. Users can create posts with images, manage categories, and browse all posts in a clean modern UI.  

## ✨ Features  
- 📝 Create and manage blog posts  
- 🖼️ Upload images (with auto-resize & optimization)  
- 🤖 AI-powered automatic category detection (via OpenAI API)  
- 📂 Category-based post filtering  
- 🎨 Modern UI inspired by [shadcn/ui]  
- 🔐 Secure backend with Express & MongoDB  

## 🛠️ Tech Stack  
**Frontend:** React, shadcn-inspired components, Fetch API  
**Backend:** Node.js, Express, MongoDB (Mongoose ORM)  
**AI Integration:** OpenAI GPT API (for category detection)  
**Version Control:** Git + GitHub  

## 📂 Project Structure  
```bash
UniVibe/
│── backend/ # Backend server (Node.js + Express + MongoDB)
│ │── config/ # Config files
│ │ └── db.js # MongoDB connection setup
│ │
│ │── controllers/ # Logic for API routes
│ │ └── postController.js # Create + fetch posts, AI category detection
│ │
│ │── middleware/ # Middlewares (auth, error handling, etc.)
│ │ └── uploadMiddleware.js # Multer setup for image uploads
│ │
│ │── models/ # Database models (Mongoose schemas)
│ │ └── Post.js # Post schema
│ │
│ │── routes/ # API route definitions
│ │ └── postRoutes.js # Routes for posts
│ │
│ │── uploads/ # Uploaded images (served as static files)
│ │
│ │── .env # Environment variables (not committed)
│ │── server.js # Main backend entry point
│ │── package.json # Backend dependencies
│
│── frontend/ # Frontend client (React)
│ │── public/ # Static files (favicon, index.html)
│ │
│ │── src/ # React source code
│ │ │── api/ # API helpers
│ │ │ └── postApi.js # Axios/Fetch for backend requests
│ │ │
│ │ │── components/ # Reusable UI components
│ │ │ ├── Navbar.jsx # Navigation bar
│ │ │ ├── PostCard.jsx # Single post card
│ │ │ ├── PostForm.jsx # Form to create a post
│ │ │ └── CategoryFilter.jsx # Filter posts by category
│ │ │
│ │ │── pages/ # Page-level components
│ │ │ ├── Home.jsx # All posts feed
│ │ │ ├── CreatePost.jsx # Create new post page
│ │ │ └── NotFound.jsx # 404 page
│ │ │
│ │ │── styles/ # CSS/Theme files (if not using Tailwind)
│ │ │ └── global.css
│ │ │
│ │ │── App.jsx # Main app component
│ │ │── main.jsx # React entry point
│ │
│ │── package.json # Frontend dependencies
│
│── .gitignore # Ignore node_modules, .env, uploads
│── README.md # Documentation
│── package.json # (optional if root-level scripts)
