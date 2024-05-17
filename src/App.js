import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import Dashboard from './components/Dashboard';
import ProductScreen from './components/ProductScreen';
import AgentScreen from './components/AgentScreen';
import AdminNavbar from './components/AdminNavbar';
import './components/styles.css';

const App = () => {
  return (
    <Router>
      <AdminNavbar />
      <div style={{ display: 'flex' }}>
        <AdminSidebar />
        <div style={{ marginLeft: '60px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/agents" element={<AgentScreen />} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
