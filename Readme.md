# ✨ Asana – Where Teams Get Work Done

**Ashan** is a full-stack task & team management app built to power productive workflows and transparent collaboration.

Whether you're managing personal tasks or leading a team, Ashan gives you the clarity and tools to get things done — fast, secure, and beautifully.

---

## 🎯 Why I Built This

Every great team needs a great tool. I created **Ashan** to learn, build, and ship something close to what teams like Asana and Trello offer — but from the ground up, solo. This project is my take on how modern SaaS tools should feel: clean, fast, and focused on what matters.

---

## 🔧 Tech Stack

**Frontend**
- React (Hooks + Router)
- Chakra UI
- Axios
- Vercel for deployment

**Backend**
- Node.js + Express.js
- MongoDB + Mongoose
- JWT for Auth
- bcrypt for security
- dotenv for env config
- Render for hosting

---

## 🌐 Live Project

- **Frontend**: [https://clone-ashna.vercel.app/](https://clone-ashna.vercel.app/)  
- **Backend**: [https://cloneashna.onrender.com](https://cloneashna.onrender.com)

> 💤 Free-tier backend might take 15–30 seconds to wake up.

---

## 📂 Folder Structure

```
CloneAshna/
├── Backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── Navbar/
│   │   ├── pages/
│   │   ├── Routers/
│   │   ├── App.jsx
│   │   ├── main.jsx
```

---

## 🔐 Key Features

### Auth
- Register / Login
- Encrypted passwords with `bcrypt`
- Secure JWT-based sessions
- Protected routes on both ends

### Tasks
- Add, edit, delete tasks
- Filter by priority, status, and due date
- Organize work visually and logically

### Teams
- Create & join teams
- Assign tasks to team members
- Collaborative task management

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the Repos

```bash
git clone <frontend-repo-url>
cd frontend
npm install

git clone <backend-repo-url>
cd backend
npm install
```

### 2. Setup Environment Variables

**Frontend (.env)**

```
REACT_APP_BASE_URL=https://your-backend-url.onrender.com
```

**Backend (.env)**

```
PORT=5000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
```

### 3. Run the App

```bash
# Backend
cd backend
node server.js

# Frontend
cd frontend
npm start
```

---

## 🔌 API Endpoints

All secured routes require `Authorization: Bearer <token>`

**Auth**
- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/profile`

**Tasks**
- `GET /tasks`
- `POST /tasks/create`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

**Teams**
- `POST /teams`
- `POST /teams/:id/add-member`

---

## 🌱 Roadmap

- [ ] Email-based team invites  
- [ ] PWA support   
- [ ] Task calendar view
## 🙌 Let’s Connect

I'm actively exploring opportunities and open to collaboration.

📬 [Your LinkedIn](https://your-linkedin-profile)  
💻 Drop an Issue or Star the Repo

