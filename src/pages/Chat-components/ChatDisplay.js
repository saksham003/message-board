import React from 'react';
import { useParams } from 'react-router';
import { CurrentRoomProvider } from '../../context/current-room-context';
import { useRooms } from '../../context/rooms.context';
import ChatBottom from './ChatBottom';
import ChatTop from './ChatTop';

const ChatDisplay = () => {
  const { chatId } = useParams();
  const rooms = useRooms();

  if (!rooms) {
    return <div>Loading...</div>;
  }

  const currentRoom = rooms.find(room => room.id === chatId);

  if (!currentRoom) {
    return <h5 style={{ textAlign: 'center' }}>Chat not found!</h5>;
  }
  const { name, description } = currentRoom;

  const currentRoomData = {
    name,
    description,
  };
  

  return (
    <CurrentRoomProvider data={currentRoomData}>
      <div className="chat-display">
        <div className="chat__top">
          <ChatTop />
        </div>
        <div className="chat__main">main</div>
        <div className="chat__bottom">
          <ChatBottom/>
        </div>
      </div>
    </CurrentRoomProvider>
  );
};

export default ChatDisplay;
