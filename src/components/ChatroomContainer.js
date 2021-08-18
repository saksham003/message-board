import React from 'react';
import { useRooms } from '../context/rooms.context';
import ChatroomElement from './ChatroomElement';

const ChatroomContainer = () => {
  const rooms = useRooms();

  return (
    <div className="chatroom-wrapper">
      {!rooms && 'Loading...'}
      {rooms &&
        rooms.length > 0 &&
        rooms.map(room => {
          return <ChatroomElement key={room.id} data={room} />;
        })}
    </div>
  );
};

export default ChatroomContainer;
