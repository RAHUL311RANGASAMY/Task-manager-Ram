import React from 'react';
import axios from 'axios';
import './TaskItem.css';

function TaskItem({ task, onTaskUpdated, onTaskDeleted }) {
  const handleStatusChange = async (e) => {
    try {
      const updatedTask = await axios.put(`/api/tasks/${task._id}`, {
        ...task,
        status: e.target.value,
      });
      onTaskUpdated(updatedTask.data);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`/api/tasks/${task._id}`);
        onTaskDeleted(task._id);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className={`task-item ${task.status.toLowerCase()}`}>
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        {task.description && <p className="task-description">{task.description}</p>}
        <div className="task-meta">
          <span className="task-date">Due: {formatDate(task.dueDate)}</span>
        </div>
      </div>

      <div className="task-actions">
        <select
          value={task.status}
          onChange={handleStatusChange}
          className={`status-select ${task.status.toLowerCase()}`}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
