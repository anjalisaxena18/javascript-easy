import React, { useState } from 'react';
import './ToDoList.css';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleAddTask = () => {
        const updatedTasks = [...tasks];
        if (editIndex !== null) {
            // Update existing task
            updatedTasks[editIndex] = newTask;
            setEditIndex(null);
        } else {
            // Add new task
            updatedTasks.push(newTask);
        }
        setTasks(updatedTasks);
        setNewTask('');
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    const handleEditTask = (index) => {
        setNewTask(tasks[index]);
        setEditIndex(index);
    };

    return (
        <div className="fullscreen-container">
            <h1 className="todo-heading">To-Do List</h1>
            <div className="todo-box">
                <div className="input-container">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="task-input"
                        placeholder="Enter a task..."
                    />
                    <button onClick={handleAddTask} className="action-btn">
                        {editIndex !== null ? 'Update Task' : 'Add Task'}
                    </button>
                </div>
                <ul className="task-list">
                    {tasks.map((task, index) => (
                        <li key={index} className="task-item">
                            <span className="task-text">{task}</span>
                            <div className="task-actions">
                                <button onClick={() => handleEditTask(index)} className="edit-btn">Edit</button>
                                <button onClick={() => handleDeleteTask(index)} className="delete-btn">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;
