# 🚀 Task & Team Management API

A secure, scalable, and modular RESTful API built using **Node.js**, **Express**, and **MongoDB**, designed to manage users, tasks, and teams efficiently.

---

## 📦 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Fast, unopinionated web framework
- **MongoDB** – NoSQL database for flexible storage
- **Mongoose** – ODM for MongoDB
- **JWT (jsonwebtoken)** – Stateless user authentication
- **bcryptjs** – Password hashing for secure login
- **dotenv** – Manage environment variables
- **Nodemon** – Development tool for automatic restarts

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### 4. Start the Server

```bash
npm run dev
```

---

## 🌐 Deployment Notice

> ⚠️ This project is deployed on **Render**, so the first API request may take a few seconds due to server spin-up (cold start). Please allow some time for the response.

---

## 🔐 Authentication

All protected routes require a valid JWT in the header:

```
Authorization: Bearer <your_token>
```

### POST `/auth/register`

```json
{
  "username": "alex",
  "email": "alex@example.com",
  "password": "secure123"
}
```

### POST `/auth/login`

```json
{
  "email": "alex@example.com",
  "password": "secure123"
}
```

### GET `/auth/profile` _(Requires Auth)_

Returns user profile info based on the token.

---

## 📋 Task Management

### GET `/tasks` _(Requires Auth)_

Optional query filters:
- `priority`
- `status`
- `dueBefore` or `dueAfter`
- `sortBy`

### POST `/tasks/create`

```json
{
  "title": "Create landing page",
  "description": "Wireframe and visual design",
  "priority": "high",
  "status": "in-progress",
  "dueDate": "2025-04-20"
}
```

### PUT `/tasks/:id`

Update task status or details.

### DELETE `/tasks/:id`

Delete a task.

---

## 👥 Team Collaboration

### POST `/teams` _(Requires Auth)_

```json
{
  "name": "Frontend Team"
}
```

### POST `/teams/:teamId/add-member` _(Requires Auth)_

```json
{
  "userId": "user_id_here"
}
```

---

## 📌 Notes

- Use `Bearer <token>` in headers for accessing secured routes.
- Ensure requests use proper JSON formatting.
- Initial API calls on Render might experience slight delays.

