import React, { useCallback, useState } from 'react';
import firebase from 'firebase/app';
import { useProfile } from '../../context/profile.context';
import { useParams } from 'react-router';
import { database } from '../../misc/firebase';

function assembleMessage(profile, chatId) {
  return {
    roomId: chatId,
    author: {
      name: profile.name,
      uid: profile.uid,
      createdAt: profile.createdAt,
      ...(profile.avatar ? { avatar: profile.avatar } : {}),
    },
    createdAt: firebase.database.ServerValue.TIMESTAMP,
  };
}

const ChatBottom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const { chatId } = useParams();
  const { profile } = useProfile();

  const onInputChange = useCallback(event => {
    setInput(event.target.value);
  }, []);

  const onSentClick = async () => {
    if (input.trim() === '') {
      return;
    }

    const msgData = assembleMessage(profile, chatId);
    msgData.text = input;

    const updates = {};

    const messageId = database.ref('messages').push().key;

    updates[`/messages/${messageId}`] = {
      ...msgData,
      msgId: messageId,
    };

    setIsLoading(true);
    try {
      await database.ref().update(updates);
      setInput('');
      setIsLoading(false);
    } catch (err) {
      alert(err.message);
      setIsLoading(false);
    }
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      onSentClick();
    }
  };

  return (
    <div className="chat-bottom__input">
      <input
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="Write your message here..."
      />
      <button onClick={onSentClick} disabled={isLoading}>
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default ChatBottom;
