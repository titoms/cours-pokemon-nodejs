const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
// GET sur localhost:3000/api/users
router.get('/', userController.getAllUsers)
// Get ONE user
// localhost:3000/api/users/9230774h2203HDkdj
router.get('/:id', userController.getOneUser)
// Create a user
// POST sur localhost:3000/api/users
router.post('/', userController.register)
// Login a user
// POST sur localhost:3000/api/users/login
router.post('/login', userController.login)
// Edit a user
router.put('/:id', userController.editUser)
// Delete a user
router.delete('/:id', userController.deleteUser)

module.exports = router