import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import SidebarOption from './SidebarOption';

function App() {
  return (
    <div className="app">
        <h1>Twitter clone</h1>

        <Sidebar />

        <SidebarOption />
    </div>
  );
}

export default App;
