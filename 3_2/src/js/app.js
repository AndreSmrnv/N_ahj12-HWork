import Tasks from './Tasks.js';
import TasksUI from './TasksUI.js';

const tasksUI = new TasksUI();
const tasks = new Tasks(tasksUI);
tasks.init();
