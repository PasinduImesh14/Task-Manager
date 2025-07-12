const express = require('express');
const { listTasks, create, update, remove } = require('../controllers/taskController');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticateToken, listTasks);
router.post('/', authenticateToken, create);
router.put('/:id', authenticateToken, update);
router.delete('/:id', authenticateToken, remove);

module.exports = router;