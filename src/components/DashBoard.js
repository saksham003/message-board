import React from 'react';
import { useProfile } from '../context/profile.context';

const DashBoard = ({ onCloseDashboard, onSignOut }) => {
  const { profile } = useProfile();

  return (
    <div className="dashboard">
      <i class="fas fa-times" onClick={onCloseDashboard}></i>
      <div className="dashboard__heading">
        <h3>{profile.name}</h3>
      </div>
      <div className="dashboard__signout">
        <button onClick={onSignOut}>Sign out</button>
      </div>
    </div>
  );
};

export default DashBoard;
