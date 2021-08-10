import React from 'react';

const SideBar = ({ onShowDashboard }) => {
  return (
    <div className="sidebar">
      <button onClick={onShowDashboard} className="sidebar__button">
        Access Dashboard
      </button>
    </div>
  );
};

export default SideBar;
