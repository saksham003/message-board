import React, { createContext, useContext, useEffect, useState } from 'react';
import { database } from '../misc/firebase';
import { objToArr } from '../misc/helpers';

const RoomContext = createContext();

export const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const roomListRef = database.ref('rooms');

    roomListRef.on('value', snap => {
      const snapArr = objToArr(snap.val());
      setRooms(snapArr);
    });

    return () => {
      roomListRef.off();
    };
  }, []);

  return <RoomContext.Provider value={rooms}>{children}</RoomContext.Provider>;
};

export const useRooms = () => useContext(RoomContext);