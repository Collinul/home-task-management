import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './contexts/TaskContext';
import { WeeklyView } from './components/task-management/WeeklyView';
import { Dashboard } from './components/dashboard/Dashboard';
import { Settings } from './components/settings/Settings';
import { Navigation } from './components/ui/Navigation';
import './index.css';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="App h-full">
          <Routes>
            <Route path="/" element={<WeeklyView />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <Navigation />
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;