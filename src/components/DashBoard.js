import React, { useState } from 'react';
import { useProfile } from '../context/profile.context';
import { database } from '../misc/firebase';
import EditableInput from './EditableInput';

const DashBoard = ({ closeDashboard, onSignOut }) => {
  const { profile } = useProfile();
  const [slideOut, setSlideOut] = useState(false);

  const onCloseDashboard = () => {
    setSlideOut(true);
    setTimeout(() => {
      closeDashboard();
    }, 300);
    setTimeout(() => {
      setSlideOut(false);
    }, 301);
  };

  const onSave = async (newData) => {
    const userNameRef = database.ref(`/profiles/${profile.uid}`).child('name'); 

    try {
     await userNameRef.set(newData); 
      alert("Name updated");
    } catch (error) {
     alert("error.message") 
    }
  }

  return (
    <div className={`dashboard__wrapper ${slideOut && 'fade-out'}`}>
      <div className={`dashboard ${slideOut && 'slide-out'}`}>
        <p>Dashboard</p>
        <i className="fas fa-times" onClick={onCloseDashboard}></i>
        <div className="dashboard__heading">
          <h3>Hey! {profile.name}</h3>
        </div>
        <EditableInput onSave={onSave} defaultValue={profile.name} />
        <div className="dashboard__signout">
          <button onClick={onSignOut}>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
