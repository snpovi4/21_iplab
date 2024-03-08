import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TasksPage() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ heading: '', description: '' });
    const [editIndex, setEditIndex] = useState(-1);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleAddTask = () => {
        if (newTask.heading.trim() !== '' && newTask.description.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask({ heading: '', description: '' });
        }
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((task, i) => i !== index));
    };

    const handleEditTask = (index) => {
        setEditIndex(index);
        setNewTask(tasks[index]);
    };

    const handleSaveEdit = (index, updatedTask) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
        setEditIndex(-1);
    };

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col text-center">
                </div>
                <div className="col-auto">
                    <Link to="/home">
                        <button className="btn btn-dark mb-2">Go Back</button>
                    </Link>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter task title"
                        name="heading"
                        value={newTask.heading}
                        onChange={handleInputChange}
                    />
                    <textarea
                        className="form-control mb-2"
                        placeholder="Enter task description"
                        name="description"
                        value={newTask.description}
                        onChange={handleInputChange}
                    ></textarea>
                    <button
                        className="btn btn-primary"
                        id="add-task-button"
                        onClick={handleAddTask}
                    >
                        Add new task
                    </button>
                </div>
            </div>

            <div className="mt-4">
                {tasks.map((task, index) => (
                    <div key={index} className="card mt-2">
                        <div className="card-body">
                            {editIndex === index ? (
                                <div>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="heading"
                                        value={newTask.heading}
                                        onChange={handleInputChange}
                                    />
                                    <textarea
                                        className="form-control mb-2"
                                        name="description"
                                        value={newTask.description}
                                        onChange={handleInputChange}
                                    ></textarea>
                                    <div className="text-right">
                                        <button
                                            className="btn btn-success mr-2"
                                            onClick={() => handleSaveEdit(index, newTask)}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => {
                                                setEditIndex(-1);
                                                setNewTask({ heading: '', description: '' });
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h5 className="card-title">{task.heading}</h5>
                                    <p className="card-text">{task.description}</p>
                                    <div className="text-right">
                                        <button
                                            className="btn btn-primary mr-2" 
                                            onClick={() => handleEditTask(index)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteTask(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
