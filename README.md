# Blog Application 📰

Full-stack blog application with **React** frontend and **Node.js/Express** backend.  
Includes search, article grouping by categories, infinite scroll with skeleton cards, and serving frontend build from backend.

---

## Features
- 🔍 Search articles by title (supports multiple words)
- 📂 Grouping articles by categories
- ♻️ Infinite scroll with IntersectionObserver
- 🖼 Skeleton cards while loading
- 🌐 Backend serves static frontend build
- 🌡 Backend API returns random temperature

---

## Tech stack
### Frontend
- React (CRA)
- CSS Modules
- JavaScript (ES6+)

### Backend
- Node.js
- Express
- CORS
- Dotenv

---

## Getting started

### 1. Clone repository
```bash
git clone https://github.com/MarynaPotiievska/plant-blog.git
cd plant-blog
```

### 2. Environment variables

Before running the project, create a `.env` file in the backend root directory (e.g. `./backend/.env`) based on `.env.example`.  

### 3. Running locally

In one terminal tab:

```bash
cd backend
npm install
npm run dev
```

In another:

```bash
cd frontend
npm install
npm start
```

By default, the project runs with the following values:
- Frontend: http://localhost:3000 (fixed, cannot be changed via `.env`)
- Backend: http://localhost:3001 (can be changed via `backend/.env`)

## Project structure

project/
 ├── backend/
 │   ├── index.js         # Express server
 │   ├── .env.example             # Environment variables
 │   └── ...
 ├── frontend/
 │   ├── public/
 │   │   ├── index.html
 │   │   ├── favicon.ico
 │   │   └── manifest.json
 │   ├── src/
 │   │   ├── assets/
 │   │   ├── components/
 │   │   ├── data/
 │   │   ├── hooks/
 │   │   ├── pages/
 │   │   ├── utils/
 │   │   ├── index.css
 │   │   └── index.js
 │   └── ...
 └── README.md
