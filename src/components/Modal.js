import React, { useState } from 'react';
import firebase from 'firebase/app';
import { database } from '../misc/firebase';

const initialFormState = { name: '', description: '' };

const Modal = ({ onCloseModal }) => {
  const [formValue, setFormValue] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);

  const onNameChange = event => {
    setFormValue((prev) => {
      return {...prev, name: event.target.value}
    })
  };

  const onDescriptionChange = event => {
    setFormValue((prev) => {
      return {...prev, description: event.target.value}
    })
  };

  const formValidate = () => {
    if (formValue.name === '' || formValue.name.trim().length < 3){
      alert('Room name must have at least 3 characters.')        
      return false;
    }
    if (formValue.description === ''){
      alert('Description is required')
      return false;
    }
    return true;
  }

  const onSubmitNewChatroom = async () => {
    if (!formValidate()){
      return;
    }
    
    setIsLoading(true);

    const newRoomData = {
      ...formValue,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    }

    try {
      await database.ref('rooms').push(newRoomData);
      setIsLoading(false);
      setFormValue(initialFormState)
      onCloseModal()
      alert(`New room - ${formValue.name} created!`);
      
    } catch (error) {
      setIsLoading(false);
      alert(error.message)
    }
    
  }

  return (
    <div className="modal">
      <div className="modal__container">
        <i onClick={onCloseModal} id="close-modal" className="fas fa-times"></i>
        <div className="modal__header">
          <h3>New chat room</h3>
        </div>
        <div className="modal__body">
          <p>Name of chat room</p>
          <input onChange={onNameChange} type="text" />
          <p>Description</p>
          <textarea onChange={onDescriptionChange}></textarea>
        </div>
        <div className="modal__footer">
          <button onClick={onSubmitNewChatroom} disabled={isLoading}>Create new chat room</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
