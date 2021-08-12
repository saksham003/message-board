import React, { Fragment} from 'react';

const SideBar = ({ onShowDashboard, openModal, closeModal }) => {

  const onShowModal = () => {
    openModal()
  };

  return (
    <Fragment>
      <div className="sidebar">
        <button onClick={onShowDashboard} className="sidebar__dashboard">
          Access Dashboard
        </button>
        <button onClick={onShowModal} className="sidebar__new-room">
          Create new chat room
        </button>
      </div>
    </Fragment>
  );
};

export default SideBar;
