import React, { useState } from 'react';
import DashBoard from '../components/DashBoard';
import SideBar from '../components/SideBar';
import { auth } from '../misc/firebase';

const Home = () => {
  const [isDashboard, setIsDashboard] = useState(false);

  const showDashboard = () => {
    setIsDashboard(true);
  };

  const closeDashboard = () => {
    setIsDashboard(false);
  };

  const onSignOut = () => {
    auth.signOut();
    alert('Signed out!');
    closeDashboard();
  };

  return (
    <div className="home__wrapper">
      {isDashboard && (
        <DashBoard onCloseDashboard={closeDashboard} onSignOut={onSignOut} />
      )}
      <div className="home">
        <SideBar onShowDashboard={showDashboard} />
      </div>
    </div>
  );
};

export default Home;
