import React from 'react';
import RoomList from '../components/RoomList';
import Timer from '../components/Timer';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <div>
      <h1>Welcome to FocusSync</h1>
      <RoomList />
      <Timer />
      <Chat />
    </div>
  );
};

export default Home;
