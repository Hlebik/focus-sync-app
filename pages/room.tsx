import React from 'react';
import { useRouter } from 'next/router';
import Timer from '../components/Timer';
import Chat from '../components/Chat';

const Room = () => {
  const router = useRouter();
  const { roomId } = router.query;  // Получаем идентификатор комнаты из URL

  return (
    <div>
      <h1>Room: {roomId}</h1>
      <Timer />
      <Chat />
    </div>
  );
};

export default Room;
