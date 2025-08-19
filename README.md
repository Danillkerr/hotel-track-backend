# 🏨 HotelEase API

A RESTful API for hotel management and automation.  
This backend service is built with **Node.js, Express.js, and MongoDB (Mongoose)** and supports authentication, authorization, and full CRUD functionality.

---

## 🚀 Technologies
- **Node.js + Express.js** — backend framework
- **MongoDB (Atlas) + Mongoose** — database
- **JWT / Passport.js** — authentication and authorization
- **Swagger** — API documentation
- **RESTful API** — communication with frontend

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Danillkerr/hotel-track-backend.git
   cd hotel-track-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   npm start
   ```

---

## 📂 Project Structure

```bash
/src
 ├── config/        # database config, environment variables
 ├── controllers/   # business logic for API
 ├── models/        # Mongoose models
 ├── routes/        # API routes
 ├── middleware/    # authentication, error handling
 ├── utils/         # helper functions
 └── server.ts      # application entry point
```

---

## 📖 API Documentation

```bash
http://localhost:3000/api-docs
```

---

## ✅ Features

- Room and booking management
- Guest and staff management
- Authentication & role-based authorization
- Full CRUD operations with MongoDB
- RESTful API with Swagger docs

---

## 📌 Commit Style

- **Format:**

  ```bash
  <type>[optional scope]: <description>

  [optional body]

  [optional footer(s)]
  ```

- **Types:**

  ```bash
   - *feat:* A new feature
   - *fix:* A bug fix
  ```
  Types other than fix: and feat: are allowed(build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.)

- **Example:**

  ```bash
  git commit -m "feat(auth): add auth by google"
  ```
