import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import DashBoard from '../components/DashBoard';
import Modal from '../components/Modal';
import SideBar from '../components/SideBar';
import { RoomContextProvider } from '../context/rooms.context';
import { auth } from '../misc/firebase';
import ChatDisplay from './Chat-components/ChatDisplay';

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
    <RoomContextProvider>
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
          <Switch>
            <Route exact path="/chats/:chatId">
              <ChatDisplay />
            </Route>
          </Switch>
        </div>
      </div>
    </RoomContextProvider>
  );
};

export default Home;
