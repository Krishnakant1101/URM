const express = require('express');
const { getTasks, createTask, updateTask, deleteTask,updateTaskStage } = require('../controllers/taskController');


const router = express.Router();

router.get('/getAllTasksData',  getTasks);
router.post('/addTasksData',  createTask);
router.put('/updateTasksData',  updateTask);
router.put('/updateTasksStage',  updateTaskStage);
router.delete('/deleteTasksData',  deleteTask);

module.exports = router;
