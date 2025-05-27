# 📚 Yomimono – Book Manager Backend (MERN)

This is the **backend** for **Yomimono**, a minimalist, Japanese-inspired MERN stack book management app. It handles all CRUD operations for books and serves as the API layer for the frontend.

![Backend Preview](./public/yomimono-backend-preview.png)

> ⚠️ If the image doesn't load, try moving the `.png` to your project root and updating the path to `./yomimono-backend-preview.png`.

---

## ⚙️ Features

- 📡 **RESTful API** for full CRUD (Create, Read, Update, Delete)  
- 🔒 **.env-based configuration** with dotenv  
- 🌐 **CORS** support  
- 🧼 Clean, modular structure  
- 🛠️ Built with **Express + Mongoose**

---

## 🧠 Tech Stack

- Node.js  
- Express  
- MongoDB (via Mongoose)  
- Dotenv  
- CORS  
- Nodemon (for dev)

---

## 📂 File Structure

```txt
backend/
│
├── models/
│ └── bookModel.js # Mongoose schema for books
│
├── routes/
│ └── booksRoute.js # API endpoints
│
├── config.js # Environment config loader
├── index.js # Server entry point
├── .env # Environment variables
├── package.json
├── package-lock.json
└── public/
└── yomimono-backend-preview.png

```

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/yomimono-backend.git
cd yomimono-backend

```

### 2. Install dependencies

```bash
npm install
```

### 3. Create .env file

PORT=5555
MONGO_URI=your-mongodb-connection-string

### 4. Run the server

```bash
# Development mode

npm run dev

# OR production

npm start
```

## 📡 API Endpoints

All routes are prefixed with `/books`

```txt
| Method | Route     | Description             |
|--------|-----------|-------------------------|
| GET    | `/ping`   | Wake-up ping            |
| GET    | `/`       | Get all books           |
| GET    | `/:id`    | Get a book by ID        |
| POST   | `/`       | Create a new book       |
| PUT    | `/:id`    | Update book by ID       |
| DELETE | `/:id`    | Delete book by ID       |
```

Each book has the following fields:

{
  "title": "string",
  "author": "string",
  "publishYear": "number"
}

Example response:

{
  "message": "Book updated successfully!",
  "data": {
    "_id": "664ad23...",
    "title": "The Tale of Genji",
    "author": "Murasaki Shikibu",
    "publishYear": 1021,
    "createdAt": "...",
    "updatedAt": "..."
  }
}

🧪 Testing
You can use Postman or Thunder Client to test all routes listed above. Just make sure your MongoDB URI is valid and that the frontend is pointed to the same PORT.

🧼 Notes
The model is named "Cat" by accident in bookModel.js. You can update it to "Book" for accuracy.


📄 License
This project is licensed under the MIT License.

👤 Author
Crafted by Joshua Atendido Bear, blending technology and tradition with elegant minimalism.
