// Menggunakan let dan const
let tasks = [];
const TASK_KEY = 'tasks';

// Menggunakan arrow function, template literals, destructuring
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        description: task,
        completed: false,
    };

    tasks = [...tasks, newTask];
    saveTasks();
};

export const deleteTask = (taskId) => {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
};

// Menggunakan promises, async/await
const loadTasks = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const savedTasks = JSON.parse(localStorage.getItem(TASK_KEY)) || [];
            resolve(savedTasks);
        }, 1000);
    });
};

const saveTasks = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
            resolve();
        }, 500);
    });
};

export const initializeTasks = async () => {
    tasks = await loadTasks();
    return tasks;
};
