import React from 'react';
import AddTaskForm from './features/tasks/AddTaskForm';
import TaskList from './features/tasks/TaskList';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>TaskFlow - Redux Task Manager</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;