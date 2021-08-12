import React, { Fragment, useState } from 'react';
import DashBoard from '../components/DashBoard';
import Modal from '../components/Modal';
import SideBar from '../components/SideBar';
import { auth } from '../misc/firebase';

const Home = () => {
  const [isDashboard, setIsDashboard] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {showModal && <Modal onCloseModal={closeModal} />}
      <div className="home__wrapper">
        {isDashboard && (
          <DashBoard closeDashboard={closeDashboard} onSignOut={onSignOut} />
        )}
        <div className="home">
          <SideBar
            onShowDashboard={showDashboard}
            openModal={openModal}
            closeModal={closeModal}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
