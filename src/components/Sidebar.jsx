// Sidebar.jsx

import React from 'react';
import './css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;

