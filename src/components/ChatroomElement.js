import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ChatroomElement = ({ data }) => {
  const { name, description } = data;
  const [ isActive, setIsActive ] = useState(false); 
  const location = useLocation()
  const url = `/chats/${data.id}`

  useEffect(() => {
    if (location.pathname === url){
      setIsActive(true)
    }
    return () => setIsActive(false)
  },[location.pathname, url])

  return (
    <div className={`chatroom-element ${isActive && 'chatroom-element--active'}`}>
      <Link to={url} style={{ textDecoration: 'none' }}>
        <h6>{name}</h6>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default ChatroomElement;
