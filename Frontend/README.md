# 🌟 Asana Clone – Frontend

A modern and responsive frontend application for task and team management, built using **React.js** and **Chakra UI**. This app connects to a secure backend API to enable user registration, login, task creation, and team collaboration.

---

## 🚀 Tech Stack

- **React.js** – Component-based UI library
- **Chakra UI (v2+)** – Modern UI toolkit for styling
- **Axios** – Promise-based HTTP client for API calls
- **React Router DOM** – Client-side routing
- **.env** – Environment variable configuration
- **Vercel** – Deployment platform for frontend

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone <your-frontend-repo-url>
cd <project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root and add your backend base URL:

```
REACT_APP_BASE_URL=https://your-backend-api.onrender.com
```

### 4. Start the Application

```bash
npm start
```

The app will run locally on:  
👉 `http://localhost:3000`

---

## 🌐 Deployment

> ✅ Deployed on [Vercel](https://vercel.com/)  
> ⚠️ Initial API responses may take a few seconds due to backend cold-start on Render.

---

## 🔗 Features

- 🔐 User registration and login (JWT-based)
- 🧠 Task creation, editing, and filtering
- 👥 Team creation and member management
- 🧭 Smooth navigation using React Router
- 💅 Fully responsive UI using Chakra UI
- 📡 Integrated with secure backend API

---

## 📁 Folder Structure

```
├── src
│   ├── components      // Reusable UI components
│   ├── pages           // Route-level pages
│   ├── context         // Auth or state context
│   ├── utils           // Axios configs or helper files
│   └── App.jsx         // Main app component
```

---

## 🛠️ API Integration

All API requests are handled using **Axios**. Endpoints connect with the backend hosted on Render. JWT tokens are stored securely (localStorage/sessionStorage) and sent with requests to protected routes.

---

## 📌 Notes

- Ensure the backend server is running before frontend API calls.
- For production, update the `.env` variable to use the correct backend deployment URL.
- Chakra UI is fully customizable – feel free to extend its theme.
