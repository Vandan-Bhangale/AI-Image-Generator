# AI Image Generator

A full-stack application that generates images from text prompts.

## Features

* Generate images from text prompts
* Save and view generated images
* Download images locally
* Responsive design with Tailwind CSS

## Tech Stack

* **Frontend**: React, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB

---

## 🌐 Live Demo

Frontend (Vercel): [AI Image Generator - Live](https://ai-image-generator-inky.vercel.app/)  
Backend (Render): [AI Image Generator API](https://ai-image-generator-backend-99h1.onrender.com)

⚠️ **Note:** Since the backend is deployed on **Render free tier**, it may take some time to wake up from sleep.  
Also, due to session/cookie handling in production, authentication-related requests may throw errors or not behave as expected in the live demo.

---

## Folder Structure
```
Image-Generator/
├─ Frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ assets/
│  │  └─ main.jsx
│  ├─ index.html
│  └─ vite.config.js
├─ Backend/
│  ├─ src/
│  │  ├─ index.js
│  │  ├─ routes/
│  │  ├─ controllers      
│  │  ├─ models/
│  └─ package.json
├─ README.md
```

## Installation

```bash
# Clone the repo
git clone https://github.com/Vandan-Bhangale/AI-Image-Generator.git
cd Image-Generator

# Install dependencies
cd Backend && npm install
cd ../Frontend && npm install
```

## Running Locally

```bash
# Run backend
cd Backend
npm start (If nodemon is installed)

# Run frontend
cd Frontend
npm run dev
```

## Scripts

### Server

```bash
nodemon index.js   # start backend with nodemon
```

### Client

```bash
npm run dev   # start frontend with Vite
```


