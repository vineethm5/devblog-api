DevBlog - Developer Blogging Platform API
A backend API built with Node.js and Express to power a developer-focused blogging platform. It features user authentication, blog CRUD operations, comment support, and optional reactions and tagging.
________________________________________
🔧 Features
•	User Registration and Login (JWT Authentication)
•	Create, Read, Update, Delete (CRUD) for blog posts
•	Comment system for blogs
•	Tags and categories support
•	Reactions (likes/bookmarks) [optional]
•	Public and protected API routes
•	File/image upload support (via Multer + Cloudinary or local)
•	Pagination and search capabilities
________________________________________
🛠️ Tech Stack
•	Node.js + Express.js
•	MongoDB with Mongoose
•	JWT for authentication
•	bcrypt for password hashing
•	express-validator for request validation
•	Multer + Cloudinary (optional) for image handling
•	dotenv for environment variable management
________________________________________
📁 Project Structure
/devblog-api
│
├── /controllers     # Logic for each route (auth, blogs, comments)
├── /models          # Mongoose models (User, Blog, Comment)
├── /routes          # Route definitions
├── /middleware      # Auth, error handling, file handling
├── /validators      # Input validation
├── /utils           # Helper functions (e.g., cloudinary)
├── /config          # DB config and environment setup
├── /uploads         # Uploaded files (if stored locally)
├── .env             # Environment variables
└── server.js        # Entry point
________________________________________
📦 Installation
git clone https://github.com/yourusername/devblog-api.git
cd devblog-api
npm install
cp .env.example .env  # Fill in your Mongo URI, JWT secret, etc.
npm start
________________________________________
🔐 Authentication
JWT-based authentication system for secure access.
•	POST /api/auth/register – Register a new user
•	POST /api/auth/login – Login and get JWT token
Include token in protected routes like:
Authorization: Bearer <your_token>
________________________________________
📘 API Endpoints
👤 Users
•	POST /api/auth/register – Register
•	POST /api/auth/login – Login
📝 Blogs
•	GET /api/blogs – Get all blogs (public)
•	GET /api/blogs/:id – Get a blog by ID (public)
•	POST /api/blogs – Create blog (protected)
•	PUT /api/blogs/:id – Update blog (protected)
•	DELETE /api/blogs/:id – Delete blog (protected)
💬 Comments
•	GET /api/blogs/:id/comments – Get comments on a blog
•	POST /api/blogs/:id/comments – Add comment (protected)
🔍 Filters & Query Examples
•	/api/blogs?tag=nodejs
•	/api/blogs?author=vineeth&sort=createdAt
________________________________________
🧪 Example Blog Schema
{
  "title": "Mastering Express.js",
  "content": "Express.js is a fast Node.js framework...",
  "tags": ["nodejs", "backend"],
  "author": "Vineeth M",
  "createdAt": "2025-06-07T12:34:56Z"
}
________________________________________
💡 Future Enhancements
•	Rich text content editor integration
•	Like and bookmark feature
•	Role-based access control (admin/moderator)
•	Admin dashboard
•	API rate limiting
•	Swagger/OpenAPI documentation
________________________________________
📄 License
MIT
________________________________________
🙌 Contributing
Pull requests welcome! Open an issue for major changes.
________________________________________
📬 Contact
Vineeth M – vineeth.apple5@gmail.com
Project Link: https://github.com/vineethm5/devblog-api

