import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleTaskAdded = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Task Manager</h1>
        <p>Manage your tasks efficiently</p>
      </header>

      <div className="app-container">
        <div className="form-section">
          <TaskForm onTaskAdded={handleTaskAdded} />
        </div>

        <div className="list-section">
          <TaskList refresh={refreshKey} />
        </div>
      </div>

      <footer className="app-footer">
        <p>&copy; 2026 Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
