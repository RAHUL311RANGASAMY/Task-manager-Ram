import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../config';
import './TaskForm.css';

function TaskForm({ onTaskAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!formData.title.trim()) {
        setError('Title is required');
        setLoading(false);
        return;
      }

      const response = await axios.post(`${API_URL}/api/tasks`, formData);
      onTaskAdded(response.data);
      setFormData({ title: '', description: '', dueDate: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter task description (optional)"
          rows="4"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
}

export default TaskForm;
