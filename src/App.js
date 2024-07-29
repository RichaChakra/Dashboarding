import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import KanbanBoard from './pages/Kanban';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <Router>
      <ThemeSwitcher>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<KanbanBoard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </ThemeSwitcher>
    </Router>
  );
}

export default App;
