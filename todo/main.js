import { addTask, deleteTask, initializeTasks } from './todo.js';

// Menggunakan async/await untuk inisialisasi tugas
const init = async () => {
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');

    // Menggunakan template literals
    const renderTasks = (tasks) => {
        taskList.innerHTML = tasks.map(task => `
            <li>
                ${task.description}
                <button data-id="${task.id}">Delete</button>
            </li>
        `).join('');
    };

    // Menggunakan destructuring
    const tasks = await initializeTasks();
    renderTasks(tasks);

    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value;
        if (task) {
            addTask(task);
            renderTasks(tasks);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (event) => {
        const target = event.target;
        const taskId = target.getAttribute('data-id');

        if (target.tagName === 'BUTTON') {
            deleteTask(Number(taskId));
            renderTasks(tasks);
        }
    });
};

init();
