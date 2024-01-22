// // Sidebar.jsx
// //product - order - dispatch - delivered - returned 
// import React from 'react';
// import './css/Sidebar.css';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>Sidebar</h2>
//       <ul>
//         <li>Product</li>
//         <li>Order</li>
//         <li>Dispatch</li>
//         <li>Delivered</li>
//         <li>Returned</li>
//         {/* Add more items as needed */}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

// Sidebar.jsx

import React, { useState } from 'react';
import './css//Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="toggle-button" onClick={handleToggleCollapse}>
        {collapsed ? <h2>»</h2> : <h1>«</h1>}
      </div>
      {!collapsed && (
        <>
          {/* <h2>Sidebar</h2> */}
          <ul>
          <li>Product</li>
          <li>Order</li>
          <li>Dispatch</li>
          <li>Delivered</li>
          <li>Returned</li>
            {/* Add more items as needed */}
          </ul>
        </>
      )}
    </div>
  );
}

export default Sidebar;
