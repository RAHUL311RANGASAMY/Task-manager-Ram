import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ refresh }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/tasks');
      const data = Array.isArray(response.data) ? response.data : [];
      setTasks(data);
      setError('');
    } catch (err) {
      setError('Error fetching tasks. Make sure the backend server is running.');
      setTasks([]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleTaskUpdated = (updatedTask) => {
    setTasks(Array.isArray(tasks) ? tasks.map(task => (task._id === updatedTask._id ? updatedTask : task)) : [updatedTask]);
  };

  const handleTaskDeleted = (taskId) => {
    setTasks(Array.isArray(tasks) ? tasks.filter(task => task._id !== taskId) : []);
  };

  const filteredTasks = Array.isArray(tasks) ? tasks.filter(task => {
    if (filter === 'Completed') return task.status === 'Completed';
    if (filter === 'Pending') return task.status === 'Pending';
    return true;
  }) : [];

  if (loading && tasks.length === 0) {
    return <div className="loading">Loading tasks...</div>;
  }

  return (
    <div className="task-list-container">
      <h2>Your Tasks ({filteredTasks.length})</h2>
      
      {error && <div className="error-message">{error}</div>}

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All ({Array.isArray(tasks) ? tasks.length : 0})
        </button>
        <button
          className={`filter-btn ${filter === 'Pending' ? 'active' : ''}`}
          onClick={() => setFilter('Pending')}
        >
          Pending ({Array.isArray(tasks) ? tasks.filter(t => t.status === 'Pending').length : 0})
        </button>
        <button
          className={`filter-btn ${filter === 'Completed' ? 'active' : ''}`}
          onClick={() => setFilter('Completed')}
        >
          Completed ({Array.isArray(tasks) ? tasks.filter(t => t.status === 'Completed').length : 0})
        </button>
      </div>

      <div className="tasks">
        {filteredTasks.length === 0 ? (
          <p className="no-tasks">No tasks found. Create one to get started!</p>
        ) : (
          filteredTasks.map(task => (
            <TaskItem
              key={task._id}
              task={task}
              onTaskUpdated={handleTaskUpdated}
              onTaskDeleted={handleTaskDeleted}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
