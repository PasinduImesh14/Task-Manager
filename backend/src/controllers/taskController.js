const { getTasks, createTask, updateTask, deleteTask } = require('../models/task');

async function listTasks(req, res) {
  try {
    const filter = req.query.filter || '';
    const sort = req.query.sort || '';
    const tasks = await getTasks(req.user.userId, filter, sort);
    res.json(tasks);
  } catch (err) {
    console.error("List tasks error:", err);
    res.status(500).json({ error: 'Failed to list tasks' });
  }
}

async function create(req, res) {
  try {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'Title required' });
    const taskId = await createTask(req.user.userId, title, description || '');
    res.json({ taskId });
  } catch (err) {
    console.error("Create task error:", err);
    res.status(500).json({ error: 'Failed to create task' });
  }
}

async function update(req, res) {
  try {
    const { title, description } = req.body;
    const taskId = req.params.id;
    await updateTask(taskId, req.user.userId, title, description || '');
    res.json({ success: true });
  } catch (err) {
    console.error("Update task error:", err);
    res.status(500).json({ error: 'Failed to update task' });
  }
}

async function remove(req, res) {
  try {
    const taskId = req.params.id;
    await deleteTask(taskId, req.user.userId);
    res.json({ success: true });
  } catch (err) {
    console.error("Delete task error:", err);
    res.status(500).json({ error: 'Failed to delete task' });
  }
}

module.exports = { listTasks, create, update, remove };