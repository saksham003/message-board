import React from 'react';
import ChatroomContainer from './ChatroomContainer';

const SideBar = ({ onShowDashboard, openModal }) => {
  const onShowModal = () => {
    openModal();
  };

  return (
    <div className="sidebar">
      <div className="sidebar__buttons">
        <button onClick={onShowDashboard} className="sidebar__dashboard">
          Access Dashboard
        </button>
        <button onClick={onShowModal} className="sidebar__new-room">
          Create new chat room
        </button>
      </div>
      <ChatroomContainer />
    </div>
  );
};

export default SideBar;
