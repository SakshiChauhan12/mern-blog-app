# 📝 MERN Blog App

Welcome to the **Blog App Project** — a step-by-step learning journey built using the **MERN Stack**:
> **MongoDB | Express.js | React.js | Node.js**

This app is being developed feature-by-feature with clean commits and continuous documentation. The aim is to **learn by doing** while maintaining best practices in development and documentation.

## 📁 Folder Structure

blog-app/
├── backend/ # Express + MongoDB backend
└── frontend/ # React frontend (coming next)



## ✅ Phase 1: Setup & Initialization

### ✔️  GitHub Repo Setup
- Created a new GitHub repository named `blog-app`
- Initialized local folder with:
  - `backend/` — for server code
  - `frontend/` — for React app (to be added)

### ✔️  Backend Setup with Express + MongoDB

#### 🔧 Dependencies Installed

```bash
npm init
npm install express mongoose cors dotenv
npm install --save-dev nodemon
```


### create index.js-->basic express sercer creation
### create .env file
```

=====================================================================================
```
### ✅ Phase 2: Blog Model + CRUD APIs
```
We'll now:

1.Create a Blog model using Mongoose.
```
### in this model we will create a blog schema with fields like title , content and time stamps.
```

2.Set up CRUD routes (Create, Read, Update, Delete) for blogs.
```
### in this step we will create a blogRoutes.js file and define the routes for CRUD operations.

### how let's understand
we will make router and if the request is made to the router then it will call the controller function.

there can be different types of requests like GET, POST, PUT, DELETE.
### We will define the routes for the following tasks
- Create a new blog post
- Get all blog posts
- Get a single blog post by ID
- Update a blog post by ID
- Delete a blog post by ID

# Creation of a new blog post 
{
    in this , what is happening we are taking the data given by user from req.body ,then we are creating a new blog from that data and saving it and providing a response ...simple!


}
# getting all blog posts
{
    in this , we are getting all the blogs from the database and providing a response with the blogs.
}

# Getting a single blog post by ID
{
    in this , we are getting the id  from params and then we are finding the blog with that id and providing a response with the blog.
}
# Updating a blog post by ID
{
    in this , we are getting the id from params and the data from req.body and then we are finding the blog with that id and updating it with the data provided by user and providing a response with the updated blog.
}

# Deleting a blog post by ID
{
    in this , we are getting the id from params and then we are finding the blog with that id and deleting it and providing a response with the deleted blog.
}






```

3.Test them using Postman.


backend/
├── models/
│   └── blogModel.js
├── routes/
│   └── blogRoutes.js
└── index.js
