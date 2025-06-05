const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

// GET /todos - get all todos
router.get('/', getAllTodos);

// POST /todos - create a new todo
router.post('/', createTodo);

// GET /todos/:id - get a single todo by id
router.get('/:id', getTodoById);

// PUT /todos/:id - update a single todo by id
router.put('/:id', updateTodo);

// DELETE /todos/:id - delete a single todo by id
router.delete('/:id', deleteTodo);

module.exports = router;
