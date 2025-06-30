# 📝 MERN Blog App

Welcome to the **Blog App Project** — a step-by-step learning journey built using the **MERN Stack**:

> **MongoDB | Express.js | React.js | Node.js**

This app is being developed feature-by-feature with clean commits and continuous documentation. The aim is to **learn by doing** while maintaining best practices in development and documentation.

---

## 📁 Folder Structure

```
blog-app/
├── backend/    # Express + MongoDB backend
└── frontend/   # React frontend
```

---

## ✅ Phase 1: Setup & Initialization

### 🗂️ GitHub Repo Setup
- Created a new GitHub repository named `blog-app`
- Initialized local folder with:
  - `backend/` — for server code
  - `frontend/` — for React app

### ⚙️ Backend Setup with Express + MongoDB

#### Installed Dependencies

```bash
npm init
npm install express mongoose cors dotenv
npm install --save-dev nodemon
```

#### Created:
- `index.js` → Basic Express server
- `.env` → To store environment variables

---

## ✅ Phase 2: Blog Model + CRUD APIs

### 🛠️ What We Did

1. **Created Mongoose Blog Model**  
   `models/blogModel.js`  
   - Fields: `title`, `content`  
   - Enabled timestamps

2. **Created Blog Routes**  
   `routes/blogRoutes.js`

   We implemented the following RESTful API endpoints:
   
   - `POST /api/blogs` → Create a new blog
   - `GET /api/blogs` → Get all blogs
   - `GET /api/blogs/:id` → Get a single blog by ID
   - `PUT /api/blogs/:id` → Update a blog by ID
   - `DELETE /api/blogs/:id` → Delete a blog by ID

### 🔍 Behind the Scenes:

| Action                     | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| **Create Blog**           | Takes data from `req.body`, creates a blog, saves it, and sends response.   |
| **Get All Blogs**         | Fetches all blogs from DB and returns them.                                 |
| **Get Blog by ID**        | Uses `req.params.id` to find and return a single blog.                      |
| **Update Blog**           | Uses ID to find a blog and update its fields using `req.body`.              |
| **Delete Blog**           | Finds and deletes blog by ID, returns deleted blog.                         |

### 🧪 Tested Using Postman

```
backend/
├── models/
│   └── blogModel.js
├── routes/
│   └── blogRoutes.js
└── index.js
```

🎉 **Phase 2 Complete**  
Backend with full CRUD functionality is working!

---

## ✅ Phase 3: React Frontend Development

### ⚛️ Setup React App

```bash
npx create-react-app frontend
cd frontend
npm start
```

- Deleted unnecessary default files in `src/`
- Installed Axios for API calls:

```bash
npm install axios
```

### 📂 Folder Structure (Frontend)

```
src/
├── components/
│   ├── BlogList.js
│   ├── CreateBlog.js
│   └── Navbar.js
├── api.js
└── App.js
```

🎉 **Phase 3 Complete**  
React app initialized & blog list displayed from backend.

---

## ✅ Phase 4: Add Blog from UI

We created a **form component** to input title & content and submit it via Axios to the backend.

- Used `useState` for form state
- Called `createBlog()` from `api.js`
- Refreshed blog list on creation

---

## ✅ Phase 5: Delete & Update Blog from UI

### 🗑️ Part 1: Delete Blog

- A ❌ delete button was added next to each blog
- On click:
  - Shows confirmation popup
  - Calls `deleteBlog(id)`
  - Updates UI by refreshing the blog list

✅ Key Learning:

| Use Case                        | Syntax                             |
|---------------------------------|------------------------------------|
| No arguments to function        | `onClick={handleClick}`            |
| Arguments to function           | `onClick={() => handleClick(id)}`  |

---

### ✏️ Part 2: Update Blog

- "Edit" button sets the form to **edit mode**
- Prefills title & content in form
- On submit:
  - Calls `updateBlog(id, updatedData)`
  - Refreshes blog list
  - Resets form

---

## ✅ Phase 6: Styling the App

### 📄 Pages:

- `/` → **Homepage** with background and welcome message
- `/blogs` → View all blogs
- `/create` → Create blog using form

### 🧩 Components:

- ✅ **Navbar**: with links — Home, View Blogs, Create Blog
- ✅ **Footer**
- 🎨 Styled using **Tailwind CSS**

### 🛠️ Installations:

```bash
# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# React Router
npm install react-router-dom
```

### ⚙️ Routing Setup in `App.js`

```jsx
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blogs" element={<BlogList />} />
    <Route path="/create" element={<CreateBlog />} />
  </Routes>
</Router>
```

🎉 Phase 6 complete! The app now looks clean, modern, and fully navigable.

---

## 🔮 Next Possible Phases

- ✅ Add loading spinner or skeletons
- 🛡️ Form validation
- 🧠 Role-based auth (admin only can delete)
- ☁️ Host backend (Render) and frontend (Netlify/Vercel)

---

> 🚀 Built with ❤️ by Sakshi Chauhan during her MERN learning journey.
