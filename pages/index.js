// pages/index.js
import React from 'react';
import Link from 'next/link';
import RoomList from '../components/RoomList';

const Home = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Добро пожаловать в FocusSync</h1>
      <p>Выберите комнату для совместной фокусировки:</p>
      <RoomList />
    </div>
  );
};

export default Home;
