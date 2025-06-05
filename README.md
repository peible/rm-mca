# Todo API

A simple Node.js REST API for managing todo items with MongoDB integration.

## Features

- Create, read, update, and delete todo items
- MongoDB integration with Mongoose
- RESTful API endpoints
- Error handling and validation
- CORS support

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (choose one option below):
  - **Option 1 - Docker (Recommended):** Install Docker
  - **Option 2 - Local MongoDB:** Install MongoDB locally
  - **Option 3 - MongoDB Atlas:** Create a free MongoDB Atlas account

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up MongoDB (choose one):

   **Option 1 - Using Docker (Recommended):**
   ```bash
   # Start MongoDB container
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

   **Option 2 - Local MongoDB:**
   ```bash
   # Install MongoDB on your system, then start it
   mongod
   ```

   **Option 3 - MongoDB Atlas:**
   - Create a free account at https://www.mongodb.com/atlas
   - Create a cluster and get your connection string
   - Update the `MONGODB_URI` in `.env` file

3. Environment variables:
   - The `.env` file is already configured for local MongoDB
   - For MongoDB Atlas, update `MONGODB_URI` with your connection string

## Usage

### Development mode (with auto-restart):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Get all todos
- **GET** `/todos`
- Returns all todo items

### Create a new todo
- **POST** `/todos`
- Body: `{ "title": "string", "description": "string" }`
- `title` is required

### Get a single todo
- **GET** `/todos/:id`
- Returns a specific todo by ID

### Update a todo
- **PUT** `/todos/:id`
- Body: `{ "title": "string", "description": "string", "completed": boolean }`
- All fields are optional

### Delete a todo
- **DELETE** `/todos/:id`
- Deletes a specific todo by ID

## Example Usage

### Create a todo:
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Node.js", "description": "Complete the Node.js tutorial"}'
```

### Get all todos:
```bash
curl http://localhost:3000/todos
```

### Update a todo:
```bash
curl -X PUT http://localhost:3000/todos/TODO_ID \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Node.js", "completed": true}'
```

### Delete a todo:
```bash
curl -X DELETE http://localhost:3000/todos/TODO_ID
```

## Todo Schema

```javascript
{
  title: String (required),
  description: String,
  completed: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

## Response Format

All responses follow this format:
```javascript
{
  success: boolean,
  data: object | array,    // for successful requests
  message: string,         // for errors or info
  error: string           // for error details
}
```
