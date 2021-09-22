import React, { memo } from 'react';
import { useCurrentRoom } from '../../context/current-room-context';

const ChatTop = () => {
  const name = useCurrentRoom(v => v.name);
  console.log(name);

  return <div className='chat-top__name'><h4>{name}</h4></div>;
};

export default memo(ChatTop);
